import type { NavLink, NavDropdownItem } from '@shared/types/nav';
import { services } from './services';

/**
 * Busca el título vigente de un servicio por su `slug` en data/services.ts,
 * para que este menú no mantenga su propia copia del nombre (evita
 * desincronizaciones si un servicio se renombra o se agrega uno nuevo).
 */
const serviceLabel = (slug: string): string =>
  services.find((service) => service.slug === slug)?.title ?? slug;

/** Enlace "Inicio", siempre el primero en la navegación principal. */
export const homeLink: NavLink = { label: 'Inicio', href: '/' };

/** Etiquetas de los desplegables del navbar (desktop y menú móvil). */
export const dropdownLabels = {
  about: 'Conócenos',
  products: 'Productos y Servicios',
};

/** Título del panel de menú móvil. */
export const mobileMenuTitle = 'Menú';

/** Botón de acceso a la Oficina Virtual (desktop y menú móvil). */
export const loginButtonLabel = 'Iniciar Sesión';

/** Ítems del desplegable "Conócenos". */
export const aboutDropdown: NavDropdownItem[] = [
  { label: 'Historia', href: '/historia', icon: 'history' },
  { label: 'Misión, Visión y Valores', href: '/mision-vision-valores', icon: 'layers' },
  { label: 'Memorias Anuales', href: '/memorias-anuales', icon: 'book' },
];

/**
 * Ítems del desplegable "Productos y Servicios" (todos apuntan a la sección
 * de servicios en home). Los nombres se leen de data/services.ts; el ícono y
 * el orden de aparición en este menú se definen aquí.
 */
export const productsDropdown: NavDropdownItem[] = [
  { label: serviceLabel('cuentas-de-ahorro'), href: '/#servicios', icon: 'dollar' },
  { label: serviceLabel('prestamos'), href: '/#servicios', icon: 'briefcaseLoan' },
  { label: serviceLabel('certificados-financieros'), href: '/#servicios', icon: 'chartGrowth' },
  { label: serviceLabel('aportaciones'), href: '/#servicios', icon: 'user' },
  { label: serviceLabel('seguros'), href: '/#servicios', icon: 'shield' },
  { label: serviceLabel('cooperativismo'), href: '/#servicios', icon: 'building' },
  { label: 'Todos los servicios', href: '/#servicios', icon: 'grid' },
];

/** Resto de enlaces principales, en el orden en que aparecen en el navbar. */
export const primaryNavLinks: NavLink[] = [
  { label: 'Hazte Socio', href: '/hazte-socio' },
  { label: 'App Móvil', href: '/app-movil' },
  { label: 'Contacto', href: '/#contacto' },
];
