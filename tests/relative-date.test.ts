import assert from 'node:assert/strict';
import test from 'node:test';
import { formatRelativeDate } from '../src/lib/relative-date';

const now = new Date('2026-10-30T12:00:00Z');

test('shows recent articles in days and older articles in months or years', () => {
  assert.equal(formatRelativeDate(new Date('2026-10-29T12:00:00Z'), now), '1 day ago');
  assert.equal(formatRelativeDate(new Date('2026-10-23T12:00:00Z'), now), '7 days ago');
  assert.equal(formatRelativeDate(new Date('2026-09-30T12:00:00Z'), now), '1 month ago');
  assert.equal(formatRelativeDate(new Date('2026-04-30T12:00:00Z'), now), '6 months ago');
  assert.equal(formatRelativeDate(new Date('2025-11-04T12:00:00Z'), now), '11 months ago');
  assert.equal(formatRelativeDate(new Date('2025-10-30T12:00:00Z'), now), '1 year ago');
});

test('does not show a negative age for an article published today', () => {
  assert.equal(formatRelativeDate(now, now), 'Today');
  assert.equal(formatRelativeDate(new Date('2026-10-30T12:05:00Z'), now), 'Today');
});
