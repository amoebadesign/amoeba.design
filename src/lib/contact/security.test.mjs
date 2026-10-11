import assert from 'node:assert/strict';
import { test, beforeEach } from 'node:test';
import {
	getClientIp,
	isHoneypotTriggered,
	isRateLimited,
	pruneRateLimitStore,
	resetRateLimitStore,
} from './security.mjs';

beforeEach(() => {
	resetRateLimitStore();
});

test('getClientIp reads x-forwarded-for first hop', () => {
	const request = new Request('https://amoeba.design/api/contact', {
		headers: { 'x-forwarded-for': '203.0.113.1, 10.0.0.1' },
	});
	assert.equal(getClientIp(request), '203.0.113.1');
});

test('honeypot triggers when _gotcha is non-empty', () => {
	assert.equal(isHoneypotTriggered({ _gotcha: 'spam' }), true);
	assert.equal(isHoneypotTriggered({ _gotcha: '   ' }), false);
	assert.equal(isHoneypotTriggered({ _gotcha: '' }), false);
	assert.equal(isHoneypotTriggered({}), false);
});

test('rate limit allows bursts then blocks', () => {
	const key = 'contact:test';
	for (let i = 0; i < 8; i += 1) {
		assert.equal(isRateLimited(key), false);
	}
	assert.equal(isRateLimited(key), true);
});

test('pruneRateLimitStore drops expired keys', () => {
	const key = 'contact:old';
	isRateLimited(key);
	resetRateLimitStore();
	isRateLimited(key);
	pruneRateLimitStore(Date.now() + 16 * 60 * 1000);
	assert.equal(isRateLimited(key), false);
});
