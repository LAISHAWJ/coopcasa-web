import VanillaTilt from 'vanilla-tilt';

/**
 * Inicializa el tilt 3D (vanilla-tilt) solo en dispositivos con mouse real
 * (hover:hover + pointer:fine) y sin prefers-reduced-motion activado. En
 * touch/mobile el elemento se queda con la inclinación de reposo que ya
 * define su propia clase CSS (perspective + rotateX/rotateY estáticos), sin
 * ejecutar tracking de mouse donde no aporta nada.
 *
 * Cada `[data-tilt]` puede declarar su inclinación de reposo deseada vía
 * `data-tilt-x` / `data-tilt-y` (grados); vanilla-tilt vuelve a esa posición
 * al salir el mouse (`reset-to-start`), en vez de resetear a plano.
 */
export function initTilt3d(selector = '[data-tilt]'): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (els.length === 0) return;

  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsHover || reducedMotion) return;

  els.forEach((el) => {
    VanillaTilt.init(el, {
      max: 8,
      speed: 500,
      glare: false,
      scale: 1.02,
      perspective: 900,
      startX: Number(el.dataset.tiltX ?? 0),
      startY: Number(el.dataset.tiltY ?? 0),
      'reset-to-start': true,
    });
  });
}
