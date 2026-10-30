import assert from 'node:assert/strict';
import test from 'node:test';
import { sanitizeArticleHtml } from '../src/lib/article-content';

test('preserves published paragraphs, headings and meaningful images', () => {
  const output = sanitizeArticleHtml('<h1>Example</h1><h2>A section</h2><p>Original words stay intact.</p><figure><img src="https://example.com/photo.jpg" alt="A market" /><figcaption>Market context</figcaption></figure>', 'Example');
  assert.ok(output.includes('Original words stay intact.'));
  assert.ok(output.includes('<h2>A section</h2>'));
  assert.ok(output.includes('src="https://example.com/photo.jpg"'));
  assert.ok(output.includes('alt="A market"'));
  assert.ok(!output.includes('<h1>'));
});

test('blocks executable markup and unsafe link schemes', () => {
  const output = sanitizeArticleHtml('<script>alert(1)</script><p onclick="alert(1)">Safe text</p><a href="javascript:alert(1)">Read</a><img src="x" onerror="alert(1)" /><iframe src="https://example.com"></iframe>', 'Example');
  assert.ok(!/<script|onclick|onerror|javascript:|<iframe/i.test(output));
  assert.ok(output.includes('Safe text'));
});

test('removes feed tracking pixels while retaining the article image', () => {
  const output = sanitizeArticleHtml('<img src="https://medium.com/_/stat?event=post.clientViewed" /><img src="https://example.com/pixel" width="1" height="1" /><img src="https://example.com/story.jpg" alt="Story" />', 'Example');
  assert.ok(!output.includes('/_/stat'));
  assert.ok(!output.includes('example.com/pixel'));
  assert.ok(output.includes('example.com/story.jpg'));
});

test('protects external tabs and converts remaining body h1 headings', () => {
  const output = sanitizeArticleHtml('<h1>A body section</h1><a target="_blank" href="https://example.com">Source</a>', 'Different title');
  assert.ok(output.includes('<h2>A body section</h2>'));
  assert.ok(output.includes('rel="noopener noreferrer"'));
});
