import type { NavLink } from '@shared/types/nav';

/** Footer → columna "Navegación". */
export const footerNavLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Historia', href: '/historia' },
  { label: 'Misión, Visión y Valores', href: '/mision-vision-valores' },
  { label: 'Hazte Socio', href: '/hazte-socio' },
  { label: 'App Móvil', href: '/app-movil' },
  { label: 'Memorias Anuales', href: '/memorias-anuales' },
];

/** Footer → columna "Servicios" (enlazan a la sección de servicios en home). */
export const footerServiceLinks: string[] = [
  'Cuentas de ahorro',
  'Préstamos',
  'Certificados financieros',
  'Aportaciones',
  'Seguros',
];

/** Footer → enlaces legales en la barra inferior. */
export const legalLinks: NavLink[] = [
  // Reemplazar "#" por las rutas reales cuando existan las páginas legales.
  { label: 'Términos', href: '#' },
  { label: 'Privacidad', href: '#' },
  { label: 'Transparencia', href: '#' },
];

// Reemplazar el año si este archivo se reutiliza sin generarlo dinámicamente.
export const copyrightText = `© ${new Date().getFullYear()} COOPCASA. Todos los derechos reservados.`;
