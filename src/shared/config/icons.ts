/**
 * Registro central de iconos (line-icons estilo Feather, tal como en el
 * prototipo aprobado). Cada valor es el markup interno de un <svg> (paths /
 * circles / rects) copiado 1:1 del prototipo para garantizar fidelidad visual.
 *
 * No se debe modificar el atributo `d` de ningún path: son parte del diseño
 * aprobado. Para usar un icono, referenciar su clave desde `src/data/*` y
 * renderizarlo con `shared/ui/Icon.astro`.
 */

export type IconName = keyof typeof ICONS;

export const ICONS = {
  // Navegación / estructura
  // Nota: el prototipo (desktop-only) no incluía menú hamburguesa; se agrega
  // para el menú móvil responsive (ver README, sección "Responsive").
  menu: '<path d="M3 12h18M3 6h18M3 18h18"></path>',
  chevronDown: '<path d="M6 9l6 6 6-6"></path>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"></path>',
  arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"></path>',
  trendUp: '<path d="M7 17L17 7M17 7H9M17 7v8"></path>',
  close: '<path d="M18 6L6 18M6 6l12 12"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  loginArrow:
    '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><path d="M10 17l5-5-5-5M15 12H3"></path>',
  check: '<path d="M20 6L9 17l-5-5"></path>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',

  // Conócenos / institucional
  history:
    '<path d="M12 8v4l3 3M3.05 11a9 9 0 1 1 .5 4"></path><path d="M3 4v4h4"></path>',
  layers:
    '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path>',
  vision:
    '<circle cx="12" cy="12" r="3"></circle><path d="M2 12h4M18 12h4M12 2v4M12 18v4"></path>',
  visionBig:
    '<circle cx="12" cy="12" r="3"></circle><path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zM2 12h4M18 12h4M12 2v4M12 18v4"></path>',
  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path>',
  scale:
    '<path d="M12 3v18M5 7l7-4 7 4M5 7l-3 6a4 4 0 0 0 6 0zM19 7l3 6a4 4 0 0 1-6 0z"></path>',
  buildingSimple: '<path d="M3 21h18M5 21V7l7-4 7 4v14"></path>',
  building:
    '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"></path>',
  star: '<path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21l2.3-7.1-6-4.5h7.6z"></path>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>',
  graduationCap:
    '<path d="M22 10L12 5 2 10l10 5 10-5z"></path><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"></path>',
  document:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path>',
  editPencil:
    '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"></path>',

  // Productos financieros
  coin: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v10"></path>',
  coinDetailed:
    '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v10M9.5 9.5a2.5 2.5 0 0 1 2.5-1.5c1.5 0 2.5.8 2.5 2s-1 1.8-2.5 2-2.5.8-2.5 2 1 2 2.5 2a2.5 2.5 0 0 0 2.5-1.5"></path>',
  briefcaseLoan:
    '<rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
  chartGrowth: '<path d="M3 3v18h18"></path><path d="M7 15l4-4 3 3 5-6"></path>',
  user: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
  users:
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>',
  shield:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect>',
  dollar:
    '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
  deviceMobile:
    '<rect x="5" y="2" width="14" height="20" rx="2.5"></rect><path d="M12 18h.01"></path>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.6A8.4 8.4 0 1 1 21 11.5z"></path>',
  transfer:
    '<path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"></path>',
  clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path>',
  bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"></path>',

  // Contacto / footer
  mapPin:
    '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>',
  envelope:
    '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 5L2 7"></path>',

  // Redes sociales (variante stroke, fill="none" en el <svg>)
  facebook:
    '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
  instagram:
    '<rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none"></circle>',
  twitter:
    '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',

  // Marcas (variante fill, con colores propios embebidos en el markup)
  whatsapp:
    '<path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.45-.15-.64.15-.19.28-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2a10 10 0 0 0-8.5 15.27L2 22l4.85-1.27A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.88.76.77-2.8-.2-.31A8.2 8.2 0 1 1 12 20.2z"></path>',
  appleLogo:
    '<path d="M16.5 2c.1 1.2-.4 2.3-1.1 3.1-.7.9-1.9 1.5-3 1.4-.1-1.1.4-2.3 1.1-3C14.2 2.6 15.5 2 16.5 2zm3.4 15.6c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.3-4 3.3-1.5 0-1.9-1-4-1-2 0-2.5 1-4 1-1.6 0-2.9-1.7-3.9-3.1-2.7-4-3-8.6-1.3-11.1 1.2-1.7 3-2.7 4.8-2.7 1.8 0 2.9 1 4.4 1 1.4 0 2.3-1 4.4-1 1.5 0 3.2.9 4.3 2.4-3.8 2.1-3.2 7.5.8 8.4z"></path>',
  googlePlay:
    '<path d="M3 3l16.5 9L3 21z" fill="#2ba82c"></path><path d="M3 3l10.5 9L3 21z" fill="#5bc93a"></path><path d="M13.5 12L3 21l16.5-9z" fill="#f3e500"></path>',
} as const;
