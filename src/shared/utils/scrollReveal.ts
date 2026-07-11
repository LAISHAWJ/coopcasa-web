/**
 * Revela elementos `[data-reveal]` (valores: "up" | "left" | "right") la
 * primera vez que entran en el viewport, añadiendo `.is-revealed` (ver
 * global.css). Se llama una sola vez desde MainLayout, así que cualquier
 * componente puede marcar `data-reveal` sin scripts propios.
 */
export function initScrollReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (els.length === 0) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
  );

  els.forEach((el) => observer.observe(el));
}
