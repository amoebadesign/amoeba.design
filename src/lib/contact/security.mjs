/** @typedef {{ count: number, resetAt: number }} RateLimitEntry */

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

/** @type {Map<string, RateLimitEntry>} */
const rateLimitStore = new Map();

/**
 * @param {Request} request
 */
export function getClientIp(request) {
	const forwarded = request.headers.get('x-forwarded-for');
	if (forwarded) {
		return forwarded.split(',')[0]?.trim() || 'unknown';
	}
	return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

/**
 * @param {string} key
 */
export function isRateLimited(key) {
	const now = Date.now();
	const entry = rateLimitStore.get(key);

	if (!entry || now >= entry.resetAt) {
		rateLimitStore.set(key, {
			count: 1,
			resetAt: now + RATE_LIMIT_WINDOW_MS,
		});
		return false;
	}

	entry.count += 1;
	rateLimitStore.set(key, entry);
	return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

/**
 * @param {Record<string, unknown>} body
 */
export function isHoneypotTriggered(body) {
	const value = body._gotcha;
	return typeof value === 'string' && value.trim().length > 0;
}

/**
 * @param {number} [now]
 */
export function pruneRateLimitStore(now = Date.now()) {
	for (const [key, entry] of rateLimitStore.entries()) {
		if (now >= entry.resetAt) {
			rateLimitStore.delete(key);
		}
	}
}

/** Test-only: clear in-memory limits between cases. */
export function resetRateLimitStore() {
	rateLimitStore.clear();
}
