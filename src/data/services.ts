import type { IconName } from '@shared/config/icons';

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  requirements: string[];
  icon: IconName;
  iconBg: string;
  iconColor: string;
}

/** Modal de detalle de servicio (features/home/components/ServiceModal.astro). */
export const serviceModalLabels = {
  benefitsHeading: 'Beneficios',
  requirementsHeading: 'Requisitos',
  /** Prefijo del botón de acción; se concatena con el título del servicio. */
  requestButtonPrefix: 'Solicitar',
};

/**
 * Productos y servicios ofrecidos. Cada tarjeta abre el modal de detalle
 * (features/home/components/ServiceModal.astro) con la información completa.
 * Reemplazar textos, beneficios y requisitos con la información real de cada
 * producto antes de salir a producción.
 */
export const services: Service[] = [
  {
    slug: 'cuentas-de-ahorro',
    title: 'Cuentas de ahorro',
    tagline: 'Haz crecer tu dinero con seguridad',
    description:
      'Cuentas de ahorro programado y a la vista con rendimientos competitivos y sin costos ocultos.',
    longDescription:
      'Nuestras cuentas de ahorro te permiten guardar dinero a tu ritmo y verlo crecer con rendimientos por encima del mercado. Elige entre ahorro a la vista, con total disponibilidad, o ahorro programado para alcanzar tus metas más rápido.',
    benefits: [
      'Rendimientos competitivos',
      'Sin balance mínimo obligatorio',
      'Retiros sin penalidad en cuenta a la vista',
      'App y Oficina Virtual 24/7',
    ],
    requirements: ['Ser socio de COOPCASA', 'Cédula de identidad vigente', 'Apertura desde RD$500'],
    icon: 'dollar',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    slug: 'prestamos',
    title: 'Préstamos',
    tagline: 'Crédito ágil y a tu medida',
    description:
      'Créditos personales, hipotecarios y de consumo con tasas justas y aprobación ágil.',
    longDescription:
      'Financia tus proyectos con las tasas más competitivas del sector cooperativo. Ofrecemos préstamos personales, de consumo, vehículos e hipotecarios, con plazos flexibles y aprobación en tiempo récord.',
    benefits: [
      'Tasas preferenciales para socios',
      'Aprobación en 48 horas',
      'Plazos flexibles hasta 60 meses',
      'Sin penalidad por pago anticipado',
    ],
    requirements: [
      'Antigüedad mínima de 3 meses como socio',
      'Comprobante de ingresos',
      'Cédula de identidad vigente',
    ],
    icon: 'briefcaseLoan',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    slug: 'certificados-financieros',
    title: 'Certificados financieros',
    tagline: 'Tu capital trabajando para ti',
    description:
      'Certificados de renta fija que hacen crecer tu capital con tasas garantizadas y total transparencia.',
    longDescription:
      'Invierte con confianza en certificados financieros de renta fija con tasas garantizadas. Una alternativa segura y rentable para hacer crecer tu patrimonio a corto, mediano y largo plazo.',
    benefits: [
      'Tasas garantizadas por contrato',
      'Plazos desde 3 meses',
      'Renovación automática opcional',
      'Rendimientos superiores al ahorro tradicional',
    ],
    requirements: [
      'Ser socio de COOPCASA',
      'Monto mínimo de apertura',
      'Cédula de identidad vigente',
    ],
    icon: 'chartGrowth',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    slug: 'aportaciones',
    title: 'Aportaciones',
    tagline: 'Tu capital como socio',
    description:
      'El certificado de aportaciones de capital que te convierte en dueño y te da derecho a excedentes.',
    longDescription:
      'Las aportaciones son tu capital como copropietario de la cooperativa. Además de fortalecer a COOPCASA, te dan derecho a participar en los excedentes anuales y a voz y voto en las asambleas.',
    benefits: [
      'Participación en excedentes',
      'Voz y voto en asambleas',
      'Base para acceder a créditos',
      'Apertura desde RD$500',
    ],
    requirements: [
      'Completar el formulario de afiliación',
      'Aportación inicial desde RD$500',
      'Cédula de identidad vigente',
    ],
    icon: 'users',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    slug: 'seguros',
    title: 'Seguros',
    tagline: 'Protección para ti y tu familia',
    description:
      'Planes de seguro de vida, salud y de tus bienes con condiciones preferenciales para socios.',
    longDescription:
      'Protege lo que más importa con nuestros planes de seguro diseñados para socios. Coberturas de vida, salud y patrimonio con primas accesibles y respaldo de aliados de primer nivel.',
    benefits: [
      'Primas preferenciales para socios',
      'Cobertura de vida y salud',
      'Protección de bienes y préstamos',
      'Asesoría personalizada',
    ],
    requirements: ['Ser socio activo', 'Formulario de solicitud', 'Cédula de identidad vigente'],
    icon: 'shield',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    slug: 'cooperativismo',
    title: 'Cooperativismo',
    tagline: 'Más que un banco, una comunidad',
    description:
      'Formación, dividendos y programas sociales que reinvierten en el bienestar de tu comunidad.',
    longDescription:
      'Como socio eres copropietario de la cooperativa. Participa en asambleas, recibe dividendos anuales y accede a programas de educación financiera y proyectos sociales que fortalecen a toda la comunidad.',
    benefits: [
      'Dividendos anuales por excedentes',
      'Voz y voto en asambleas',
      'Programas de educación financiera',
      'Descuentos en la red de aliados',
    ],
    requirements: [
      'Completar el formulario de afiliación',
      'Aportación inicial de socio',
      'Cédula de identidad vigente',
    ],
    icon: 'building',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
];
