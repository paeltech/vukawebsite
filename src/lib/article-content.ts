import sanitizeHtml from 'sanitize-html';

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeText(text: string): string {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function stripLeadingDuplicateTitle(html: string, title: string): string {
  const normalizedTitle = normalizeText(title);
  let result = html.trim();
  const headingPattern = /^<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>\s*/i;

  let match = result.match(headingPattern);
  while (match) {
    if (normalizeText(stripHtml(match[1])) === normalizedTitle) {
      result = result.slice(match[0].length);
      match = result.match(headingPattern);
    } else {
      break;
    }
  }

  return result;
}

function stripPhotoCreditCaptions(html: string): string {
  return html.replace(/<figcaption>[\s\S]*?Unsplash[\s\S]*?<\/figcaption>/gi, '');
}

/** Medium uses bold-only paragraphs as section labels */
function promoteStrongParagraphsToHeadings(html: string): string {
  return html.replace(/<p>\s*<strong>([^<]+)<\/strong>\s*<\/p>/gi, '<h4 class="prose-heading">$1</h4>');
}

/** Style a short opening line as a deck/subtitle */
function markArticleDeck(html: string): string {
  return html.replace(/^<p>([^<]+)<\/p>/, (match, text) => {
    const plain = stripHtml(text);
    if (plain.length > 0 && plain.length <= 160) {
      return `<p class="article-deck">${text}</p>`;
    }
    return match;
  });
}

/** Prepare Medium HTML for on-site article pages */
export function sanitizeArticleHtml(html: string, title: string): string {
  let result = sanitizeHtml(html, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'width', 'height', 'loading', 'decoding'],
      a: ['href', 'name', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    transformTags: {
      img: (_tag, attributes) => ({ tagName: 'img', attribs: { ...attributes, alt: attributes.alt || '', loading: 'lazy', decoding: 'async' } }),
      a: (_tag, attributes) => ({ tagName: 'a', attribs: { ...attributes, ...(attributes.target === '_blank' ? { rel: 'noopener noreferrer' } : {}) } }),
    },
    exclusiveFilter: frame => frame.tag === 'img' && (
      /(?:^|\/)medium\.com\/_\/stat(?:\?|$)/i.test(frame.attribs.src || '') ||
      (frame.attribs.width === '1' && frame.attribs.height === '1')
    ),
  }).trim();
  result = stripLeadingDuplicateTitle(result, title);
  result = result.replace(/<(\/?)h1(\b[^>]*)>/gi, '<$1h2$2>');
  result = stripPhotoCreditCaptions(result);
  result = promoteStrongParagraphsToHeadings(result);
  result = markArticleDeck(result);
  return result.trim();
}
