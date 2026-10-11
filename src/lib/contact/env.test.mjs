import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';
import { getResendApiKey } from './env.mjs';

describe('getResendApiKey', () => {
	const original = process.env.RESEND_API_KEY;

	afterEach(() => {
		if (original === undefined) {
			delete process.env.RESEND_API_KEY;
		} else {
			process.env.RESEND_API_KEY = original;
		}
	});

	it('returns trimmed process.env.RESEND_API_KEY when set', () => {
		process.env.RESEND_API_KEY = '  re_test  ';
		assert.equal(getResendApiKey(), 're_test');
	});

	it('returns undefined when unset and empty', () => {
		delete process.env.RESEND_API_KEY;
		assert.equal(getResendApiKey(), undefined);
		process.env.RESEND_API_KEY = '   ';
		assert.equal(getResendApiKey(), undefined);
	});
});
