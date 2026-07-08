import type { IconCard, FaqItem } from '@shared/types/content';

export const mobileAppHero = {
  eyebrow: 'App Móvil COOPCASA',
  title: 'Toda tu cooperativa,\nen la palma de tu mano',
  description:
    'Gestiona tus ahorros, transfiere, paga préstamos y consulta tus certificados desde cualquier lugar, las 24 horas, con la seguridad que mereces.',
  // Reemplazar por los enlaces reales de las tiendas cuando la app esté publicada.
  appStoreUrl: '#',
  googlePlayUrl: '#',
  // Contenido decorativo del mockup de teléfono en el hero.
  preview: {
    greeting: 'Buenos días,',
    userName: 'María R.',
    balanceLabel: 'Balance total',
    balanceAmount: 'RD$ 248,750',
    items: [
      { title: 'Ahorro programado', subtitle: 'Meta: RD$300,000', trailing: '83%' },
      { title: 'Certificado 90d', subtitle: 'Vence 12 sep', trailing: '+7.5%' },
    ],
  },
};

export const appFeaturesSection = {
  eyebrow: 'Características',
  title: 'Una app diseñada para ti',
  description:
    'Todo lo que puedes hacer sin ir a una sucursal, de forma rápida, segura e intuitiva.',
};

export const appScreenshotsSection = {
  eyebrow: 'Capturas de pantalla',
  title: 'Así se ve por dentro',
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

export const appFeatures: IconCard[] = [
  {
    title: 'Transferencias inmediatas',
    description: 'Envía dinero entre tus cuentas o a terceros al instante, sin filas ni papeleo.',
    icon: 'transfer',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Pago de préstamos',
    description: 'Paga tus cuotas o las de terceros y recibe tu comprobante al momento.',
    icon: 'briefcaseLoan',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Ahorro programado',
    description: 'Define metas y automatiza tus aportes para alcanzarlas más rápido.',
    icon: 'coin',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Certificados en línea',
    description: 'Abre y renueva certificados financieros desde tu teléfono en segundos.',
    icon: 'chartGrowth',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Acceso biométrico',
    description: 'Entra con huella o Face ID. Tu información siempre cifrada y protegida.',
    icon: 'lock',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Notificaciones en tiempo real',
    description: 'Recibe alertas de cada movimiento para tener el control total de tu dinero.',
    icon: 'bell',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
];

export interface AppScreenshot {
  title: string;
  subtitle: string;
  background: string;
  foreground: string;
  subtleText: string;
  accentBlock: string;
}

export const appScreenshots: AppScreenshot[] = [
  {
    title: 'Inicio',
    subtitle: 'Tu resumen financiero',
    background: 'linear-gradient(180deg,#eaf7ec,#fff)',
    foreground: '#0d1f14',
    subtleText: '#5a6b60',
    accentBlock: 'linear-gradient(135deg,#22a024,#2fb531)',
  },
  {
    title: 'Transferencias',
    subtitle: 'Envía en segundos',
    background: 'linear-gradient(180deg,#0d1f14,#14361b)',
    foreground: '#fff',
    subtleText: 'rgba(255,255,255,.6)',
    accentBlock: 'linear-gradient(135deg,#5bc93a,#22a024)',
  },
  {
    title: 'Mis productos',
    subtitle: 'Ahorros y certificados',
    background: 'linear-gradient(180deg,#fffbe6,#fff)',
    foreground: '#0d1f14',
    subtleText: '#8a7f00',
    accentBlock: 'linear-gradient(135deg,#f3e500,#ffe94d)',
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
