const SCROLL_THRESHOLD = 24;

export function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const update = () => {
    header.dataset.scrolled = window.scrollY > SCROLL_THRESHOLD ? 'true' : 'false';
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  document.addEventListener('astro:page-load', update);
}

initHeaderScroll();
