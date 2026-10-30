export function formatRelativeDate(publishedAt: Date, now = new Date()): string {
  const elapsedDays = Math.max(0, Math.floor((now.getTime() - publishedAt.getTime()) / 86_400_000));

  if (elapsedDays === 0) return 'Today';
  if (elapsedDays < 30) return `${elapsedDays} day${elapsedDays === 1 ? '' : 's'} ago`;

  const elapsedMonths = Math.floor(elapsedDays / 30);
  if (elapsedDays < 365) return `${Math.min(elapsedMonths, 11)} month${elapsedMonths === 1 ? '' : 's'} ago`;

  const elapsedYears = Math.floor(elapsedDays / 365);
  return `${elapsedYears} year${elapsedYears === 1 ? '' : 's'} ago`;
}
