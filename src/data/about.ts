import type { ImageMetadata } from 'astro';
import type { IconCard } from '@shared/types/content';
import type { IconName } from '@shared/config/icons';
import { siteConfig } from './siteConfig';
import aboutTeaserImage from '@assets/images/about-team-collaboration.webp';
import historyHeroImage from '@assets/images/history-founding-handshake.webp';
import historyMilestonePlanning from '@assets/images/history-milestone-planning.webp';
import historyMilestoneGrowth from '@assets/images/history-milestone-growth.webp';
import missionImage from '@assets/images/mission-advisory-consultation.webp';

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
    src: aboutTeaserImage,
    alt: 'Equipo de colaboradores de COOPCASA conversando en una reunión de trabajo',
  },
  // Reemplazar con los años reales de operación.
  yearsBadge: { value: '25', caption: 'años impulsando el cooperativismo' },
  historyCtaLabel: 'Nuestra historia',
  mvvCtaLabel: 'Misión, Visión y Valores',
};

/** Página "Historia" → hero + timeline. */
export const historyHero = {
  eyebrow: 'Conócenos',
  title: 'Nuestra historia',
  description:
    'Lo que comenzó como el sueño de un grupo de familias es hoy una de las cooperativas más queridas de la región. Este es el camino que hemos recorrido juntos.',
  image: {
    src: historyHeroImage,
    alt: 'Apretón de manos que simboliza la confianza fundacional de COOPCASA',
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
  /** Fotografía opcional; solo algunos hitos la llevan para variar el ritmo visual del timeline. */
  image?: { src: ImageMetadata; alt: string };
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
    image: {
      src: historyMilestonePlanning,
      alt: 'Equipo planificando la apertura de la primera sucursal con reportes y gráficos',
    },
  },
  {
    year: '2015',
    title: 'Expansión regional',
    description:
      'Llegamos a nuevas provincias y lanzamos nuestros programas de educación financiera gratuita.',
    icon: 'mapPin',
    image: {
      src: historyMilestoneGrowth,
      alt: 'Equipo celebrando la expansión de la cooperativa a nuevas provincias',
    },
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

interface MissionContent {
  tag: string;
  title: string;
  text: string;
  icon: IconName;
  image: { src: ImageMetadata; alt: string };
}

/** Misión: bloque partido imagen/texto (features/about/components/MvvBlocks.astro). */
export const missionContent: MissionContent = {
  tag: 'Nuestra misión',
  title: 'Impulsar el bienestar financiero de nuestra gente',
  text: 'Ofrecer servicios financieros justos, accesibles y humanos que impulsen el progreso de nuestros socios y sus familias, fortaleciendo el desarrollo económico y social de la comunidad.',
  icon: 'layers',
  image: {
    src: missionImage,
    alt: 'Asesora conversando con una socia durante una consulta financiera',
  },
};

interface VisionContent {
  tag: string;
  title: string;
  text: string;
  icon: IconName;
}

/** Visión: bloque centrado tipo "spotlight" con fondo radial (sin fotografía). */
export const visionContent: VisionContent = {
  tag: 'Nuestra visión',
  title: 'Ser la cooperativa más confiable y cercana de la región',
  text: 'Para 2030, ser reconocidos como la cooperativa de ahorro y crédito líder por su solidez, innovación tecnológica y, sobre todo, por la cercanía y el trato humano hacia cada uno de sus socios.',
  icon: 'visionBig',
};

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
