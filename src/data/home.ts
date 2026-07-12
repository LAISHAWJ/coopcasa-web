import type { IconName } from '@shared/config/icons';

/** Home → sección de servicios (encabezado; las tarjetas viven en data/services.ts). */
export const servicesSection = {
  eyebrow: 'Productos y Servicios',
  title: 'Todo lo que necesitas\npara crecer financieramente',
  description:
    'Productos diseñados para socios reales, con condiciones transparentes y acompañamiento humano. Haz clic en cada servicio para ver el detalle.',
};

/** Home → banner de estadísticas (encabezado; los números viven en data/stats.ts). */
export const statsSection = {
  title: 'Números que generan confianza',
  description: 'Más de dos décadas construyendo bienestar financiero junto a nuestra comunidad.',
};

/** Home → promo de la App Móvil (versión resumida; la página completa usa data/mobileApp.ts). */
export const appPromo = {
  badge: 'Nueva App Móvil',
  title: 'Tu cooperativa en el bolsillo',
  subtitle: 'Todo tu dinero, siempre a un toque de distancia.',
  description:
    'Ahorra, transfiere y paga tus préstamos desde donde estés. Descubre todo lo que la App de COOPCASA puede hacer por ti.',
  // Mini-features destacadas (con ícono) mostradas entre la descripción y el CTA.
  features: [
    { icon: 'transfer', label: 'Transferencias al instante' },
    { icon: 'coin', label: 'Ahorro programado automático' },
    { icon: 'lock', label: 'Acceso seguro con huella o Face ID' },
  ] as { icon: IconName; label: string }[],
  ctaLabel: 'Conocer la App',
  // Reemplazar por los enlaces reales de las tiendas cuando la app esté publicada.
  appStoreUrl: '#',
  googlePlayUrl: '#',
  // Contenido decorativo del mockup de teléfono en esta sección (pantalla de inicio ilustrativa).
  preview: {
    userName: 'Hola, María',
    balanceLabel: 'Balance total',
    balanceAmount: 'RD$ 248,750',
    quickActions: [
      { label: 'Transferir', icon: 'transfer' },
      { label: 'Pagar', icon: 'briefcaseLoan' },
      { label: 'Depositar', icon: 'coin' },
    ] as { label: string; icon: IconName }[],
    transaction: {
      title: 'Pago recibido',
      subtitle: 'Depósito de nómina',
      trailing: '+RD$18,500',
    },
  },
};

/** Home → banner de cierre (CTA principal). */
export const ctaBanner = {
  title: 'Da el primer paso hacia\ntu bienestar financiero',
  description:
    'Hazte socio en minutos, descubre tus beneficios y gestiona tus finanzas desde la Oficina Virtual, disponible 24/7.',
  primaryCtaLabel: 'Hazte socio',
  secondaryCtaLabel: 'Oficina Virtual',
};

/** Home → encabezado de la sección de preguntas frecuentes. */
export const faqSection = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas',
};

/** Botón flotante de WhatsApp (global). */
export const whatsAppWidget = {
  tooltip: 'Habla con un representante',
};
