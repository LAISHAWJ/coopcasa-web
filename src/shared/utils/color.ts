/**
 * Convierte un color hex (#rgb o #rrggbb) a una cadena rgba() con la opacidad
 * indicada. Se usa para derivar sombras/acentos suaves a partir de los
 * `accentColor` definidos en src/data/about.ts (Historia), sin tener que
 * mantener una versión rgba de cada color a mano en los datos.
 */
export function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace('#', '');
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((c) => c + c)
          .join('')
      : normalized;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
