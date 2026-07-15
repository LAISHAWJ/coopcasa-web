import type { ImageMetadata } from 'astro';
import type { IconCard, FaqItem } from '@shared/types/content';
import saldoHogarPhoto from '@assets/images/app-consulta-saldo-hogar.webp';
import transferenciaCafePhoto from '@assets/images/app-transferencia-pago-cafe.webp';
import ahorroParejaPhoto from '@assets/images/app-ahorro-planificacion-pareja.webp';
import seguridadConfianzaPhoto from '@assets/images/app-seguridad-soporte-confianza.webp';

export const mobileAppHero = {
  eyebrow: 'App Móvil COOPCASA',
  title: 'Toda tu cooperativa,\nen la palma de tu mano',
  description:
    'Gestiona tus ahorros, transfiere, paga préstamos y consulta tus certificados desde cualquier lugar, las 24 horas, con la seguridad que mereces.',
  // Reemplazar por los enlaces reales de las tiendas cuando la app esté publicada.
  appStoreUrl: '#',
  googlePlayUrl: '#',
  // Contenido decorativo del mockup de teléfono en el hero (pantalla de inicio ilustrativa).
  preview: {
    // Hora decorativa mostrada en la barra de estado del mockup.
    time: '9:41',
    greeting: 'Buenos días,',
    userName: 'María R.',
    balanceLabel: 'Balance total',
    balanceAmount: 'RD$ 248,750',
    quickActions: [
      { label: 'Transferir', icon: 'transfer' },
      { label: 'Pagar', icon: 'briefcaseLoan' },
      { label: 'Depositar', icon: 'coin' },
      { label: 'Más', icon: 'grid' },
    ] as const,
    items: [
      { title: 'Ahorro programado', subtitle: 'Meta: RD$300,000', trailing: '83%' },
      { title: 'Certificado 90d', subtitle: 'Vence 12 sep', trailing: '+7.5%' },
    ],
    // Barra de navegación inferior del mockup.
    navTabs: [
      { label: 'Inicio', icon: 'buildingSimple' },
      { label: 'Movimientos', icon: 'chartGrowth' },
      { label: 'Tarjetas', icon: 'document' },
      { label: 'Perfil', icon: 'user' },
    ] as const,
  },
};

export const appFeaturesSection = {
  eyebrow: 'Características',
  title: 'Una app diseñada para ti',
  description:
    'Todo lo que puedes hacer sin ir a una sucursal, de forma rápida, segura e intuitiva.',
};

export const appBenefitsSection = {
  eyebrow: 'Beneficios',
  title: 'Por qué usar la App',
};

export const appCta = {
  title: 'Descarga la App ahora',
  description: 'Disponible gratis para iOS y Android. Tu Oficina Virtual, siempre contigo.',
};

export const appFaqSection = {
  eyebrow: 'Ayuda de la App',
  title: 'Preguntas frecuentes de la App',
};

export interface AppFeatureBlock {
  eyebrow: string;
  title: string;
  bullets: string[];
  image: { src: ImageMetadata; alt: string };
}

// NOTA PARA EL CLIENTE: cada bloque agrupa varias funcionalidades típicas de
// una app de cooperativa financiera; confirmar/ajustar cuáles están
// realmente disponibles (o en qué fase de desarrollo) antes de publicar.
export const appFeatureBlocks: AppFeatureBlock[] = [
  {
    eyebrow: 'Tus cuentas',
    title: 'Controla tu dinero desde donde estés',
    bullets: [
      'Consulta tu saldo y movimientos en tiempo real',
      'Recibe notificaciones al instante de cada transacción',
    ],
    image: {
      src: saldoHogarPhoto,
      alt: 'Mujer revisando su saldo y movimientos desde el teléfono, relajada en casa',
    },
  },
  {
    eyebrow: 'Transferencias y pagos',
    title: 'Mueve tu dinero al instante',
    bullets: [
      'Transfiere entre tus cuentas o a terceros sin filas',
      'Paga tus préstamos o los de un familiar',
      'Recibe tu comprobante al momento',
    ],
    image: {
      src: transferenciaCafePhoto,
      alt: 'Mujer realizando un pago desde su teléfono con tarjeta en mano',
    },
  },
  {
    eyebrow: 'Ahorro y crédito',
    title: 'Ahorra y planifica tu futuro',
    bullets: [
      'Define metas de ahorro y automatiza tus aportes',
      'Abre y renueva certificados financieros en segundos',
      'Solicita tu préstamo y da seguimiento a tu solicitud',
    ],
    image: {
      src: ahorroParejaPhoto,
      alt: 'Pareja de socios mayores revisando juntos sus documentos financieros en casa',
    },
  },
  {
    eyebrow: 'Seguridad y soporte',
    title: 'Pensada para cada socio',
    bullets: [
      'Entra con huella o Face ID, siempre cifrado',
      'Soporte dentro de la app, sin salir de ella',
    ],
    image: {
      src: seguridadConfianzaPhoto,
      alt: 'Hombre sonriendo con confianza mientras usa la app desde su teléfono',
    },
  },
];

export const appBenefits: IconCard[] = [
  {
    title: 'Disponible 24/7, sin filas',
    icon: 'clock',
    iconBg: 'bg-white/6',
    iconColor: '#7ee05a',
  },
  { title: 'Ahorra tiempo y traslados', icon: 'bolt', iconBg: 'bg-white/6', iconColor: '#7ee05a' },
  {
    title: 'Máxima seguridad y cifrado',
    icon: 'shield',
    iconBg: 'bg-white/6',
    iconColor: '#7ee05a',
  },
  {
    title: 'Control total de tus finanzas',
    icon: 'chartGrowth',
    iconBg: 'bg-white/6',
    iconColor: '#7ee05a',
  },
];

export const appFaqs: FaqItem[] = [
  {
    question: '¿Cómo puedo entrar por primera vez?',
    answer:
      'Descarga la App desde App Store o Google Play, selecciona "Primer ingreso" e ingresa tu número de socio y cédula. El sistema te guiará para crear tu usuario y contraseña.',
  },
  {
    question: '¿Cómo iniciar sesión?',
    answer:
      'Abre la App e ingresa tu usuario y contraseña. También puedes activar el acceso con huella o Face ID para entrar más rápido y de forma segura.',
  },
  {
    question: '¿Cómo hago transferencias entre mis cuentas?',
    answer:
      'En el inicio pulsa "Transferir", elige la cuenta de origen y la de destino entre tus productos, escribe el monto y confirma. La operación es inmediata.',
  },
  {
    question: '¿Cómo hago transferencias a terceros?',
    answer:
      'Ve a "Transferir" → "A terceros", agrega o selecciona el beneficiario, indica el monto y confirma con tu clave o biometría. Puedes guardar beneficiarios frecuentes.',
  },
  {
    question: '¿Cómo pago mis préstamos?',
    answer:
      'En la sección "Pagos" selecciona tu préstamo, revisa la cuota o el monto a abonar y confirma el pago desde la cuenta que prefieras.',
  },
  {
    question: '¿Cómo pago préstamos de terceros?',
    answer:
      'En "Pagos" → "Préstamo de terceros" ingresa el número de préstamo o cédula del titular, el monto y confirma. Recibirás un comprobante al instante.',
  },
];
