import type { NavLink } from '@shared/types/nav';
import { services } from './services';
import { LEGAL_MODAL_ID } from './legal';
import type { LegalTabKey } from './legal';

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

/** Footer → enlaces legales en la barra inferior. Los de Términos/Privacidad
 * abren `LegalModal` (src/shared/components/LegalModal.astro); "Transparencia"
 * sigue siendo un enlace normal hasta que exista esa página. */
export interface LegalLink extends NavLink {
  modalId?: string;
  modalPayload?: LegalTabKey;
}

export const legalLinks: LegalLink[] = [
  { label: 'Términos', href: '#', modalId: LEGAL_MODAL_ID, modalPayload: 'terms' },
  { label: 'Privacidad', href: '#', modalId: LEGAL_MODAL_ID, modalPayload: 'privacy' },
  // Reemplazar "#" por la ruta real cuando exista la página de Transparencia.
  { label: 'Transparencia', href: '#' },
];

// Reemplazar el año si este archivo se reutiliza sin generarlo dinámicamente.
export const copyrightText = `© ${new Date().getFullYear()} COOPCASA. Todos los derechos reservados.`;
