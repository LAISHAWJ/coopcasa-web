import type { IconName } from '@shared/config/icons';

export interface NavLink {
  label: string;
  /** Ruta interna (kebab-case) o ancla ("#servicios") de la home. */
  href: string;
}

export interface NavDropdownItem extends NavLink {
  icon: IconName;
}
