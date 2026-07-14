import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OFFSETS: Record<string, gsap.TweenVars> = {
  up: { y: 44 },
  left: { x: -70 },
  right: { x: 70 },
  scale: { scale: 0.92 },
};

/**
 * Storytelling de scroll para Historia/MVV (GSAP + ScrollTrigger). Cada
 * `[data-story-group]` agrupa varios `[data-story="up|left|right|scale"]`
 * que se revelan en secuencia (no todos a la vez) la primera vez que el
 * grupo entra en viewport. Respeta prefers-reduced-motion mostrando todo
 * sin animar. No toca `transform` de elementos `[data-tilt]` (eso lo
 * controla vanilla-tilt en tilt3d.ts) para evitar que ambos compitan por
 * la misma propiedad: data-story siempre va en un wrapper, data-tilt en
 * el elemento hijo que realmente se inclina.
 */
export function initScrollStory(): void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const groups = document.querySelectorAll<HTMLElement>('[data-story-group]');

  groups.forEach((group) => {
    const items = Array.from(group.querySelectorAll<HTMLElement>('[data-story]'));
    if (items.length === 0) return;

    if (reducedMotion) {
      items.forEach((el) => gsap.set(el, { clearProps: 'all' }));
      return;
    }

    items.forEach((el) => {
      const offset = OFFSETS[el.dataset.story ?? 'up'] ?? OFFSETS.up;
      gsap.set(el, { opacity: 0, ...offset });
    });

    ScrollTrigger.create({
      trigger: group,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        items.forEach((el, index) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.15,
          });
        });
      },
    });
  });
}

/**
 * Parallax vertical sutil para elementos decorativos (ej. tipografía grande
 * de fondo). `data-parallax` puede llevar un número (desplazamiento en px);
 * por defecto 30px. No-op bajo prefers-reduced-motion.
 */
export function initParallax(): void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const distance = Number(el.dataset.parallax) || 30;
    gsap.to(el, {
      y: distance,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}
