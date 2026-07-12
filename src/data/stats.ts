import type { StatItem } from '@shared/types/content';

/**
 * Estadísticas institucionales. Se usan tanto en la home (con animación de
 * conteo, ver features/home/components/StatsSection.astro) como en la página
 * de Historia (mostradas de forma estática).
 */
export const stats: StatItem[] = [
  // Reemplazar `target` por la cifra real de socios activos.
  { label: 'Socios activos', target: 12500, prefix: '+', icon: 'users' },
  // Reemplazar por los años reales de operación.
  { label: 'Años de experiencia', target: 25, icon: 'clock' },
  // Reemplazar por la cantidad real de sucursales.
  { label: 'Sucursales', target: 14, icon: 'building' },
  // Reemplazar por el monto real en activos gestionados.
  {
    label: 'En activos gestionados',
    target: 1.8,
    prefix: 'RD$',
    suffix: 'B',
    decimals: 1,
    icon: 'chartGrowth',
  },
];
