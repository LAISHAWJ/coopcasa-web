import type { IconCard } from '@shared/types/content';
import type { IconName } from '@shared/config/icons';
import { siteConfig } from './siteConfig';

/** Home → sección "Sobre nosotros" (teaser), mini íconos Misión/Visión/Valores/Comunidad. */
export const aboutTeaserPoints: { title: string; icon: IconName }[] = [
  { title: 'Misión', icon: 'layers' },
  { title: 'Visión', icon: 'vision' },
  { title: 'Valores', icon: 'heart' },
  { title: 'Comunidad', icon: 'buildingSimple' },
];

export const aboutTeaser = {
  eyebrow: 'Conócenos',
  title: 'Una cooperativa hecha\npor y para su gente',
  // Reemplazar con la reseña institucional real.
  description:
    'Nacimos en 2001 con un grupo de familias que decidieron ahorrar juntas. Hoy somos una de las cooperativas de ahorro y crédito más sólidas de la región, pero seguimos rigiéndonos por el mismo principio: las personas antes que las ganancias.',
  image: {
    // Reemplazar por una fotografía real del equipo/oficinas.
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    alt: 'Equipo de colaboradores de COOPCASA',
  },
  // Reemplazar con los años reales de operación.
  yearsBadge: { value: '25', caption: 'años impulsando el cooperativismo' },
};

/** Página "Historia" → hero + timeline. */
export const historyHero = {
  eyebrow: 'Conócenos',
  title: 'Nuestra historia',
  description:
    'Lo que comenzó como el sueño de un grupo de familias es hoy una de las cooperativas más queridas de la región. Este es el camino que hemos recorrido juntos.',
  image: {
    // Reemplazar por una fotografía real de la comunidad/socios.
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
    alt: 'Comunidad de socios de COOPCASA',
  },
};

/** Página "Historia" → bloque de datos institucionales/legales (justo debajo del hero). */
export const institutionalFactsSection = {
  eyebrow: 'Información institucional',
  title: 'Quiénes somos, en cifras legales',
};

export interface InstitutionalFact {
  label: string;
  value: string;
  icon: IconName;
}

// Datos legales reales de la cooperativa. Actualizar solo si cambian los datos
// de registro/incorporación o la sede principal.
export const institutionalFacts: InstitutionalFact[] = [
  {
    label: 'Razón social',
    value: siteConfig.legalName,
    icon: 'buildingSimple',
  },
  {
    label: 'Regulación',
    value: 'Entidad incorporada en la República Dominicana bajo el registro de IDECOOP.',
    icon: 'shield',
  },
  {
    label: 'Sede principal',
    value: siteConfig.contact.address,
    icon: 'mapPin',
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  icon: IconName;
}

// Reemplazar con los hitos reales de la cooperativa.
export const timeline: TimelineEntry[] = [
  {
    year: '2001',
    title: 'Nace COOPCASA',
    description:
      'Un grupo de 30 familias funda la cooperativa con el sueño de ahorrar juntas y apoyarse mutuamente.',
    icon: 'heart',
  },
  {
    year: '2008',
    title: 'Primera sucursal propia',
    description:
      'Abrimos nuestra primera oficina y superamos los 1,000 socios, consolidando la confianza de la comunidad.',
    icon: 'building',
  },
  {
    year: '2015',
    title: 'Expansión regional',
    description:
      'Llegamos a nuevas provincias y lanzamos nuestros programas de educación financiera gratuita.',
    icon: 'mapPin',
  },
  {
    year: '2021',
    title: 'Transformación digital',
    description:
      'Estrenamos la Oficina Virtual y la App móvil, acercando la cooperativa a cada socio 24/7.',
    icon: 'deviceMobile',
  },
  {
    year: '2026',
    title: 'Más de 12,500 socios',
    description:
      'Hoy gestionamos más de RD$1.8B en activos y seguimos creciendo con el mismo espíritu del primer día.',
    icon: 'users',
  },
];

export const historyStatsSection = {
  title: 'Nuestra evolución en números',
};

/** Página "Misión, Visión y Valores". */
export const mvvHero = {
  eyebrow: 'Conócenos',
  title: 'Misión, Visión y Valores',
  description: 'El propósito que nos mueve y los principios que guían cada decisión en COOPCASA.',
};

export interface MvvBlock {
  tag: string;
  title: string;
  text: string;
  icon: IconName;
  iconBg: string;
  iconColor: string;
  background: string;
  blobPosition: 'top-right' | 'bottom-left';
}

// Reemplazar con la declaración de misión y visión aprobada oficialmente.
export const mvvBlocks: MvvBlock[] = [
  {
    tag: 'Nuestra misión',
    title: 'Impulsar el bienestar financiero de nuestra gente',
    text: 'Ofrecer servicios financieros justos, accesibles y humanos que impulsen el progreso de nuestros socios y sus familias, fortaleciendo el desarrollo económico y social de la comunidad.',
    icon: 'layers',
    iconBg: 'bg-[linear-gradient(135deg,#22a024,#2fb531)]',
    iconColor: '#fff',
    background: 'linear-gradient(135deg,#fbfdfb,#fff)',
    blobPosition: 'top-right',
  },
  {
    tag: 'Nuestra visión',
    title: 'Ser la cooperativa más confiable y cercana de la región',
    text: 'Para 2030, ser reconocidos como la cooperativa de ahorro y crédito líder por su solidez, innovación tecnológica y, sobre todo, por la cercanía y el trato humano hacia cada uno de sus socios.',
    icon: 'visionBig',
    iconBg: 'bg-[linear-gradient(135deg,#f3e500,#ffe94d)]',
    iconColor: '#8a7f00',
    background: 'linear-gradient(135deg,#fffef2,#fff)',
    blobPosition: 'bottom-left',
  },
];

export const valuesSection = {
  eyebrow: 'Valores institucionales',
  title: 'Los principios que nos definen',
};

// Reemplazar con los valores institucionales reales, si difieren.
export const values: IconCard[] = [
  {
    title: 'Transparencia',
    description: 'Información clara y honesta en cada operación y decisión.',
    icon: 'eye',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Solidaridad',
    description: 'El bienestar de uno es el bienestar de todos.',
    icon: 'heart',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Compromiso',
    description: 'Damos lo mejor por cada socio y su familia.',
    icon: 'check',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Equidad',
    description: 'Las mismas oportunidades y trato justo para todos.',
    icon: 'scale',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Cercanía',
    description: 'Trato humano y personalizado en cada interacción.',
    icon: 'chat',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Responsabilidad',
    description: 'Cuidamos el patrimonio de nuestros socios y la comunidad.',
    icon: 'shield',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
];
