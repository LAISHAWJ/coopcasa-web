/**
 * Configuración general del sitio: metadata, SEO por defecto y datos de
 * contacto institucionales. Este es el ÚNICO lugar donde deben vivir estos
 * valores; el resto del proyecto los importa desde aquí.
 */

export const siteConfig = {
  name: 'COOPCASA',
  legalName: 'Cooperativa de Ahorro, Crédito y Servicios Múltiples Inmuebles La Casa',

  // Reemplazar con el dominio real de producción (debe coincidir con `site` en astro.config.mjs).
  url: 'https://www.coopcasa.do',

  // SEO por defecto (se puede sobreescribir por página vía props de MainLayout).
  defaultTitle: 'COOPCASA | Cooperativa de Ahorro y Crédito',
  defaultDescription:
    'Ahorra, invierte y accede a préstamos con tasas justas. En COOPCASA cada socio es dueño, y cada peso que ahorras impulsa a tu comunidad.',
  // Reemplazar por la imagen Open Graph definitiva (1200x630px recomendado).
  defaultOgImage: '/og-image.jpg',
  locale: 'es_DO',

  // Reemplazar teléfono/email/WhatsApp con los datos reales de contacto vigentes.
  contact: {
    address: 'Calle Duarte No. 3, Higuamo, San Pedro de Macorís, República Dominicana',
    phone: '(809) 555-0100',
    // Número en formato internacional sin espacios, usado para el enlace de WhatsApp.
    whatsappNumber: '18095550100',
    email: 'hola@coopcasa.do',
  },

  // Reemplazar cada URL por el perfil real de la cooperativa. Si una red no
  // aplica, eliminar la entrada correspondiente (el Footer la omite automáticamente).
  socials: [
    { platform: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
