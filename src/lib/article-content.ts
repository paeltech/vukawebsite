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
  let result = html.trim();
  result = stripLeadingDuplicateTitle(result, title);
  result = stripPhotoCreditCaptions(result);
  result = promoteStrongParagraphsToHeadings(result);
  result = markArticleDeck(result);
  return result.trim();
}
