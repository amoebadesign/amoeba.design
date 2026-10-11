/**
 * Resend API key from the runtime environment (Vercel sets `process.env`; Astro may expose `import.meta.env`).
 * @returns {string | undefined}
 */
export function getResendApiKey() {
	const fromProcess = process.env.RESEND_API_KEY;
	if (fromProcess && String(fromProcess).trim()) {
		return String(fromProcess).trim();
	}

	try {
		const fromMeta = import.meta.env?.RESEND_API_KEY;
		if (fromMeta && String(fromMeta).trim()) {
			return String(fromMeta).trim();
		}
	} catch {
		// import.meta.env unavailable outside Astro/Vite
	}

	return undefined;
}
