import assert from 'node:assert/strict';
import { test } from 'node:test';
import { safeReturnTo, validateContactBody } from './validation.mjs';

test('validateContactBody requires name, email, and message', () => {
	assert.equal(validateContactBody(null), 'Invalid request body');
	assert.equal(validateContactBody({ name: '', email: 'a@b.co', message: 'hello world' }), 'Name is required');
	assert.equal(validateContactBody({ name: 'Bryan', email: '', message: 'hello world' }), 'Email is required');
	assert.equal(
		validateContactBody({ name: 'Bryan', email: 'not-an-email', message: 'hello world' }),
		'Enter a valid email address',
	);
	assert.equal(validateContactBody({ name: 'Bryan', email: 'a@b.co', message: '' }), 'Message is required');
	assert.equal(validateContactBody({ name: 'Bryan', email: 'a@b.co', message: 'short' }), 'Message is too short');
});

test('validateContactBody accepts optional company', () => {
	const parsed = validateContactBody({
		name: 'Bryan King',
		email: 'you@example.com',
		company: 'Amoeba',
		message: 'Here is my backlog.',
	});
	assert.deepEqual(parsed, {
		name: 'Bryan King',
		email: 'you@example.com',
		company: 'Amoeba',
		message: 'Here is my backlog.',
	});
});

test('honeypot in body fails validation', () => {
	assert.equal(
		validateContactBody({
			name: 'Bot',
			email: 'bot@evil.com',
			message: 'spam message here',
			_gotcha: 'filled',
		}),
		'Invalid request body',
	);
});

test('safeReturnTo only allows known paths', () => {
	assert.equal(safeReturnTo('/contact'), '/contact');
	assert.equal(safeReturnTo('/rent-a-design-engineer'), '/rent-a-design-engineer');
	assert.equal(safeReturnTo('https://evil.com'), '/contact');
});
