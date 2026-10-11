const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_NAME = 200;
const MAX_COMPANY = 200;
const MAX_MESSAGE = 10_000;
const MIN_MESSAGE = 10;

/**
 * @param {string} value
 */
export function isValidEmail(value) {
	return EMAIL_PATTERN.test(value.trim());
}

/**
 * @param {unknown} body
 * @returns {{ name: string, email: string, company: string, message: string } | string}
 */
export function validateContactBody(body) {
	if (!body || typeof body !== 'object') {
		return 'Invalid request body';
	}

	const data = body;

	if (typeof data._gotcha === 'string' && data._gotcha.trim()) {
		return 'Invalid request body';
	}

	const name = typeof data.name === 'string' ? data.name.trim() : '';
	const email = typeof data.email === 'string' ? data.email.trim() : '';
	const company = typeof data.company === 'string' ? data.company.trim() : '';
	const message = typeof data.message === 'string' ? data.message.trim() : '';

	if (!name) {
		return 'Name is required';
	}
	if (name.length > MAX_NAME) {
		return 'Name is too long';
	}
	if (!email) {
		return 'Email is required';
	}
	if (!isValidEmail(email)) {
		return 'Enter a valid email address';
	}
	if (company.length > MAX_COMPANY) {
		return 'Company is too long';
	}
	if (!message) {
		return 'Message is required';
	}
	if (message.length < MIN_MESSAGE) {
		return 'Message is too short';
	}
	if (message.length > MAX_MESSAGE) {
		return 'Message is too long';
	}

	return { name, email, company, message };
}

/** @param {unknown} value */
export function safeReturnTo(value) {
	if (value === '/rent-a-design-engineer' || value === '/contact') {
		return value;
	}
	return '/contact';
}
