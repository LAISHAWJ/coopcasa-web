import type { IconCard } from '@shared/types/content';

export const joinStepsSection = {
  eyebrow: 'El proceso',
  title: 'Pasos para hacerte socio',
};

export const memberBenefitsSection = {
  eyebrow: 'Beneficios',
  title: 'Lo que ganas al ser socio',
};

export const whyCoopSection = {
  eyebrow: 'Cooperativismo',
  title: '¿Por qué ahorrar en COOPCASA?',
  description:
    'No somos un banco. Somos una cooperativa: aquí los excedentes vuelven a ti y a tu comunidad.',
};

export const membershipRequirementsSection = {
  eyebrow: 'Requisitos',
  title: 'Todo lo que necesitas para empezar',
};

/** Página "Hazte Socio" → sección "Pasos para hacerte socio". */
export interface JoinStep {
  number: string;
  title: string;
  description: string;
  icon: IconCard['icon'];
  iconBg: string;
  iconColor: string;
  /** Muestra el botón "Llenar formulario" dentro de la tarjeta. */
  showFormButton?: boolean;
  /** Muestra el badge de monto mínimo (ej. "Desde RD$500"). */
  minAmountLabel?: string;
}

export const joinSteps: JoinStep[] = [
  {
    number: '1',
    title: 'Llena el formulario de inscripción',
    description:
      'Completa tus datos en línea. Nuestro personal de bienvenida te contactará para continuar.',
    icon: 'editPencil',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
    showFormButton: true,
  },
  {
    number: '2',
    title: 'Abre una cuenta de ahorros',
    description: 'Tu primera cuenta de ahorros activa tu vida financiera dentro de la cooperativa.',
    icon: 'coin',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
    // Reemplazar con el monto mínimo real de apertura.
    minAmountLabel: 'Desde RD$500',
  },
  {
    number: '3',
    title: 'Abre un certificado de aportaciones',
    description:
      'Con tu certificado de aportaciones de capital te conviertes oficialmente en socio dueño.',
    icon: 'user',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
    minAmountLabel: 'Desde RD$500',
  },
];

/** Página "Hazte Socio" → "Lo que ganas al ser socio". */
export const memberBenefits: IconCard[] = [
  { title: 'Tasas competitivas', icon: 'dollar', iconBg: 'bg-brand-600/10', iconColor: '#1f8f22' },
  {
    title: 'Alto rendimiento',
    icon: 'chartGrowth',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Participación en excedentes',
    icon: 'user',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Financiamiento',
    icon: 'briefcaseLoan',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Educación financiera gratuita',
    icon: 'graduationCap',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
];

/** Página "Hazte Socio" → "¿Por qué ahorrar en COOPCASA?". */
export const whyCoopReasons: IconCard[] = [
  {
    title: 'Qué es una cooperativa',
    description: 'Una asociación de personas, no de capitales. Aquí cada socio es dueño y decide.',
    icon: 'user',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Diferencia con los bancos',
    description: 'Los excedentes no van a accionistas externos: regresan a ti y a la comunidad.',
    icon: 'buildingSimple',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Rendimiento',
    description: 'Tus ahorros generan intereses competitivos, por encima del promedio del mercado.',
    icon: 'chartGrowth',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Tasas justas',
    description: 'Financiamiento con tasas preferenciales y condiciones transparentes para socios.',
    icon: 'dollar',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Apoyo a la comunidad',
    description: 'Parte de los excedentes financia proyectos sociales en tu propia localidad.',
    icon: 'heart',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Educación financiera',
    description: 'Talleres y asesorías gratuitas para que tomes mejores decisiones con tu dinero.',
    icon: 'graduationCap',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Beneficios exclusivos',
    description: 'Dividendos anuales, descuentos con aliados y productos pensados para socios.',
    icon: 'star',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Filosofía cooperativista',
    description: 'Ayuda mutua, equidad y solidaridad: las personas antes que las ganancias.',
    icon: 'heart',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
];

/** Página "Hazte Socio" → "Todo lo que necesitas para empezar" (sobre fondo oscuro). */
export const membershipRequirements: IconCard[] = [
  {
    title: 'Cuenta de ahorro',
    // Reemplazar con el monto mínimo real de apertura.
    description: 'Apertura desde RD$500.',
    icon: 'coin',
    iconBg: 'bg-brand-600/20',
    iconColor: '#7ee05a',
  },
  {
    title: 'Certificado de aportaciones',
    description: 'Desde RD$500.',
    icon: 'user',
    iconBg: 'bg-brand-600/20',
    iconColor: '#7ee05a',
  },
  {
    title: 'Demostración de ingresos',
    description: 'Carta de trabajo o estados de cuenta.',
    icon: 'document',
    iconBg: 'bg-brand-600/20',
    iconColor: '#7ee05a',
  },
  {
    title: 'Personas físicas y jurídicas',
    description: 'Aceptamos ambos tipos de socios.',
    icon: 'buildingSimple',
    iconBg: 'bg-brand-600/20',
    iconColor: '#7ee05a',
  },
];
