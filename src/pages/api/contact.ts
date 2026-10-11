import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { formatConfirmationEmail, formatInternalContactEmail } from '../../lib/contact/emails.mjs';
import {
	getClientIp,
	isHoneypotTriggered,
	isRateLimited,
	pruneRateLimitStore,
} from '../../lib/contact/security.mjs';
import { getResendApiKey } from '../../lib/contact/env.mjs';
import { safeReturnTo, validateContactBody } from '../../lib/contact/validation.mjs';

export const prerender = false;

function wantsJson(request: Request) {
	const accept = request.headers.get('accept') ?? '';
	return accept.includes('application/json');
}

async function parseBody(request: Request): Promise<Record<string, unknown>> {
	const contentType = request.headers.get('content-type') ?? '';
	if (contentType.includes('application/json')) {
		try {
			const body = await request.json();
			if (body && typeof body === 'object' && !Array.isArray(body)) {
				return body as Record<string, unknown>;
			}
		} catch {
			return {};
		}
		return {};
	}

	const form = await request.formData();
	/** @type {Record<string, unknown>} */
	const body = {};
	for (const [key, value] of form.entries()) {
		if (typeof value === 'string') {
			body[key] = value;
		}
	}
	return body;
}

function jsonResponse(body: Record<string, unknown>, status: number) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const POST: APIRoute = async ({ request, redirect }) => {
	const resendApiKey = getResendApiKey();

	if (!resendApiKey) {
		if (wantsJson(request)) {
			return jsonResponse({ error: 'Server misconfigured' }, 500);
		}
		return new Response('Server misconfigured', { status: 500 });
	}

	pruneRateLimitStore();

	const clientIp = getClientIp(request);
	if (isRateLimited(`contact:${clientIp}`)) {
		if (wantsJson(request)) {
			return jsonResponse({ error: 'Too many submissions. Please try again later.' }, 429);
		}
		return new Response('Too many submissions. Please try again later.', { status: 429 });
	}

	let body: Record<string, unknown>;
	try {
		body = await parseBody(request);
	} catch {
		if (wantsJson(request)) {
			return jsonResponse({ error: 'Invalid request body' }, 400);
		}
		return new Response('Invalid request body', { status: 400 });
	}

	if (isHoneypotTriggered(body)) {
		const returnTo = safeReturnTo(body.returnTo);
		if (wantsJson(request)) {
			return jsonResponse({ ok: true }, 200);
		}
		return redirect(`${returnTo}?sent=1`, 303);
	}

	const parsed = validateContactBody(body);
	if (typeof parsed === 'string') {
		if (wantsJson(request)) {
			return jsonResponse({ error: parsed }, 400);
		}
		return new Response(parsed, { status: 400 });
	}

	const returnTo = safeReturnTo(body.returnTo);
	const resend = new Resend(resendApiKey);

	try {
		await resend.emails.send({
			from: 'Amoeba <bryan@amoeba.design>',
			to: 'bryan@amoeba.design',
			replyTo: parsed.email,
			subject: `Contact: ${parsed.name}`,
			text: formatInternalContactEmail(parsed),
		});
	} catch (error) {
		console.error('Resend contact notification failed:', error);
		if (wantsJson(request)) {
			return jsonResponse({ error: 'Failed to send' }, 500);
		}
		return new Response('Failed to send', { status: 500 });
	}

	try {
		await resend.emails.send({
			from: 'Bryan King <bryan@amoeba.design>',
			to: parsed.email,
			subject: 'Got your message',
			text: formatConfirmationEmail(parsed),
		});
	} catch (error) {
		console.error('Resend contact confirmation failed:', error);
		if (wantsJson(request)) {
			return jsonResponse(
				{
					error:
						'Your message was sent, but the confirmation email could not be delivered. I still got it.',
				},
				502,
			);
		}
		return new Response(
			'Your message was sent, but the confirmation email could not be delivered.',
			{ status: 502 },
		);
	}

	if (wantsJson(request)) {
		return jsonResponse({ ok: true }, 200);
	}

	const hash = returnTo === '/rent-a-design-engineer' ? '#contact' : '';
	return redirect(`${returnTo}?sent=1${hash}`, 303);
};
