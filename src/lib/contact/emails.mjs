/**
 * @param {{ name: string, email: string, company: string, message: string }} data
 */
export function formatInternalContactEmail(data) {
	const lines = [
		'Contact form submission',
		'',
		`Name: ${data.name}`,
		`Email: ${data.email}`,
	];

	if (data.company) {
		lines.push(`Company: ${data.company}`);
	}

	lines.push('', 'Message:', data.message);
	return lines.join('\n');
}

/**
 * @param {{ name: string }} data
 */
export function formatConfirmationEmail(data) {
	const first = data.name.trim().split(/\s+/)[0] || 'there';
	return [
		`Hi ${first},`,
		'',
		'Got your message. I will read it and reply from this address.',
		'',
		'Bryan',
		'Amoeba',
	].join('\n');
}
