import assert from 'node:assert/strict';
import test from 'node:test';
import { buildEnquiryEmail } from '../src/lib/contact';

test('preserves the enquiry and message in a correctly encoded draft', () => {
  const data = new FormData();
  data.set('_subject', 'Vuka enquiry');
  data.set('name', 'A Test');
  data.set('email', 'test@example.com');
  data.set('enquiry', 'Corporate spinout');
  data.set('message', 'Research & delivery?\nTwo lines.');
  const url = new URL(buildEnquiryEmail('hello@example.com', data));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'hello@example.com');
  assert.equal(url.searchParams.get('subject'), 'Vuka enquiry');
  assert.ok(url.searchParams.get('body')?.includes('Enquiry: Corporate spinout'));
  assert.ok(url.searchParams.get('body')?.includes('Research & delivery?\nTwo lines.'));
});

test('excludes hidden, unexpected and empty fields from the email body', () => {
  const data = new FormData();
  data.set('name', 'A Test');
  data.set('_gotcha', 'bot');
  data.set('unexpected', 'should not be copied');
  data.set('organisation', '   ');
  const body = new URL(buildEnquiryEmail('hello@example.com', data)).searchParams.get('body');
  assert.equal(body, 'Name: A Test');
});
