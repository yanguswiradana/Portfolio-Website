export function initScrollReveal(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>('.reveal');

  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}

export function initActiveSection(navSelector = '[data-nav-link]', sectionSelector = 'main section[id]'): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const links = document.querySelectorAll<HTMLAnchorElement>(navSelector);
  if (links.length === 0) return;

  const linkByHash = new Map<string, HTMLAnchorElement>();
  links.forEach((link) => {
    const hash = link.getAttribute('href');
    if (hash && hash.startsWith('#')) {
      linkByHash.set(hash, link);
    }
  });

  const sections = document.querySelectorAll<HTMLElement>(sectionSelector);
  if (sections.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = `#${entry.target.id}`;
        const link = linkByHash.get(id);
        if (!link) continue;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}
