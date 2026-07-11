import type { NavLink, NavDropdownItem } from '@shared/types/nav';

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

/** Ítems del desplegable "Productos y Servicios" (todos apuntan a la sección de servicios en home). */
export const productsDropdown: NavDropdownItem[] = [
  { label: 'Cuentas de ahorro', href: '/#servicios', icon: 'dollar' },
  { label: 'Préstamos', href: '/#servicios', icon: 'briefcaseLoan' },
  { label: 'Certificados financieros', href: '/#servicios', icon: 'chartGrowth' },
  { label: 'Aportaciones', href: '/#servicios', icon: 'user' },
  { label: 'Seguros', href: '/#servicios', icon: 'shield' },
  { label: 'Todos los servicios', href: '/#servicios', icon: 'grid' },
];

/** Resto de enlaces principales, en el orden en que aparecen en el navbar. */
export const primaryNavLinks: NavLink[] = [
  { label: 'Hazte Socio', href: '/hazte-socio' },
  { label: 'App Móvil', href: '/app-movil' },
  { label: 'Contacto', href: '/#contacto' },
];
