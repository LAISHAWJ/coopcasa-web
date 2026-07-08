import { formatStatValue } from './formatNumber';

/**
 * Anima el conteo ascendente de las estadísticas (ver features/home/components/StatsSection.astro
 * y features/about/components/StatsBanner.astro). Reproduce la curva de animación del
 * prototipo: 1700ms, easing cúbico de salida, disparado la primera vez que la
 * sección entra en el viewport (umbral 35%).
 *
 * Cada elemento animado debe exponer sus datos vía atributos `data-*`:
 * data-stat-target, data-stat-prefix, data-stat-suffix, data-stat-decimals.
 */
export function initCountUp(root: HTMLElement, duration = 1700): void {
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-stat-target]'));
  if (els.length === 0) return;

  let animated = false;

  const run = () => {
    if (animated) return;
    animated = true;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);

      for (const el of els) {
        const target = Number(el.dataset.statTarget ?? '0');
        const prefix = el.dataset.statPrefix ?? '';
        const suffix = el.dataset.statSuffix ?? '';
        const decimals = Number(el.dataset.statDecimals ?? '0');
        el.textContent = formatStatValue(target * eased, { prefix, suffix, decimals });
      }

      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) run();
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(root);
}
