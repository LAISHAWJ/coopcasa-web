import type { NavLink } from '@shared/types/nav';
import { services } from './services';

/** Footer → texto descriptivo bajo el logo. */
export const footerBrandDescription =
  'Cooperativa de ahorro y crédito comprometida con el bienestar financiero de su comunidad desde 2001.';

/** Footer → títulos de las columnas de enlaces. */
export const footerColumnLabels = {
  navigation: 'Navegación',
  services: 'Servicios',
  contact: 'Contacto',
};

/** Footer → botón de acceso a la Oficina Virtual. */
export const footerVirtualOfficeLabel = 'Oficina Virtual';

/** Footer → columna "Navegación". */
export const footerNavLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Historia', href: '/historia' },
  { label: 'Misión, Visión y Valores', href: '/mision-vision-valores' },
  { label: 'Hazte Socio', href: '/hazte-socio' },
  { label: 'App Móvil', href: '/app-movil' },
  { label: 'Memorias Anuales', href: '/memorias-anuales' },
];

/**
 * Footer → columna "Servicios" (enlazan a la sección de servicios en home).
 * Se lee directamente de data/services.ts para que nunca quede desincronizada
 * si se agrega, quita o renombra un servicio.
 */
export const footerServiceLinks: string[] = services.map((service) => service.title);

/** Footer → enlaces legales en la barra inferior. */
export const legalLinks: NavLink[] = [
  // Reemplazar "#" por las rutas reales cuando existan las páginas legales.
  { label: 'Términos', href: '#' },
  { label: 'Privacidad', href: '#' },
  { label: 'Transparencia', href: '#' },
];

// Reemplazar el año si este archivo se reutiliza sin generarlo dinámicamente.
export const copyrightText = `© ${new Date().getFullYear()} COOPCASA. Todos los derechos reservados.`;
