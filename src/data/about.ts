import type { ImageMetadata } from 'astro';
import type { IconName } from '@shared/config/icons';
import { siteConfig } from './siteConfig';
import aboutTeaserImage from '@assets/images/about-team-collaboration.webp';
import foundingHandshakePhoto from '@assets/images/fundacion-acuerdo-manos.webp';
import branchAdvisorPhoto from '@assets/images/asesor-cliente-firma.webp';
import teamLobbyPhoto from '@assets/images/equipo-oficina-conversando.webp';
import digitalDeskPhoto from '@assets/images/profesional-escritorio-digital.webp';
import missionConsultPhoto from '@assets/images/asesora-clienta-consulta.webp';
import visionFamilyHousePhoto from '@assets/images/familia-frente-casa.webp';

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

/** Página "Historia" → hero (solo texto; el impacto visual llega en FoundingSpotlight). */
export const historyHero = {
  eyebrow: 'Conócenos',
  title: 'Nuestra historia',
  description:
    'Lo que comenzó como el sueño de un grupo de familias es hoy una de las cooperativas más queridas de la región. Este es el camino que hemos recorrido juntos.',
};

/**
 * Página "Historia" → bloque fundacional asimétrico (features/about/components/FoundingSpotlight.astro).
 * El "yearLabel" se usa además como tipografía grande de fondo.
 */
export const foundingStory = {
  yearLabel: '2001',
  eyebrow: 'Nuestros orígenes',
  title: 'Nace COOPCASA',
  text: 'Un grupo de 30 familias funda la cooperativa con el sueño de ahorrar juntas y apoyarse mutuamente. Empezamos con una idea simple: que cada aporte, sin importar su tamaño, valiera lo mismo para todos. Esa idea sigue siendo el corazón de COOPCASA.',
  // Tono "antiguo" del recorrido cronológico (ver GrowthChapters para la progresión completa).
  accentColor: '#8a7f00',
  image: {
    src: foundingHandshakePhoto,
    alt: 'Dos personas estrechándose la mano al aire libre, símbolo de la confianza fundacional de COOPCASA',
  },
};

/**
 * Página "Historia" → cierre: "ficha institucional" con tratamiento de
 * documento/sello oficial (features/about/components/InstitutionalFicha.astro),
 * separada de la banda de cifras animadas.
 */
export const institutionalFactsSection = {
  eyebrow: 'Información institucional',
  title: 'Nuestra ficha institucional',
  /** Texto corto dentro del sello circular decorativo. */
  stampLabel: 'Registro oficial',
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

export interface GrowthChapter {
  yearLabel: string;
  title: string;
  description: string;
  icon: IconName;
  /** Color de acento del capítulo; progresa de "antiguo" a "actual" a lo largo de la página. */
  accentColor: string;
  image: { src: ImageMetadata; alt: string };
}

/**
 * Página "Historia" → capítulos de crecimiento (features/about/components/GrowthChapters.astro).
 * Cada capítulo es un bloque editorial con su propia ilustración flotante y su propio
 * acento de color (no una tarjeta repetida ni un timeline conectado). El "accentColor"
 * progresa del más apagado/institucional al verde de marca pleno, dando sensación de
 * avance en el tiempo sin una línea de tiempo literal. El hito de 2026 se consolidó con
 * la banda de cifras (InstitutionalNumbers) para no duplicar el dato de "+12,500 socios".
 */
export const growthChapters: GrowthChapter[] = [
  {
    yearLabel: '2008',
    title: 'Primera sucursal propia',
    description:
      'Abrimos nuestra primera oficina y superamos los 1,000 socios, consolidando la confianza de la comunidad que nos vio nacer.',
    icon: 'building',
    accentColor: '#2ba82c',
    image: {
      src: branchAdvisorPhoto,
      alt: 'Asesor y clienta cerrando un acuerdo en un escritorio, representando la apertura de la primera sucursal de COOPCASA',
    },
  },
  {
    yearLabel: '2015',
    title: 'Expansión regional',
    description:
      'Llegamos a nuevas provincias y lanzamos nuestros programas de educación financiera gratuita, llevando el cooperativismo más allá de San Pedro de Macorís.',
    icon: 'mapPin',
    accentColor: '#5bc93a',
    image: {
      src: teamLobbyPhoto,
      alt: 'Equipo de cuatro profesionales conversando en el lobby de una oficina, representando la expansión de COOPCASA a nuevas comunidades',
    },
  },
  {
    yearLabel: '2021',
    title: 'Transformación digital',
    description:
      'Estrenamos la Oficina Virtual y la App móvil, acercando la cooperativa a cada socio sin importar dónde esté, las 24 horas del día.',
    icon: 'deviceMobile',
    accentColor: '#7ee05a',
    image: {
      src: digitalDeskPhoto,
      alt: 'Profesional trabajando en su escritorio, representando la transformación digital de COOPCASA',
    },
  },
];

/** Página "Historia" → banda de cifras institucionales (features/about/components/InstitutionalNumbers.astro). */
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
  /** Palabra gigante translúcida de fondo (tipografía expresiva). */
  bigWord: string;
  image: { src: ImageMetadata; alt: string };
}

/** Misión: mitad izquierda del panel Misión/Visión (features/about/components/MvvBlocks.astro). */
export const missionContent: MissionContent = {
  tag: 'Nuestra misión',
  title: 'Impulsar el bienestar financiero de nuestra gente',
  text: 'Ofrecer servicios financieros justos, accesibles y humanos que impulsen el progreso de nuestros socios y sus familias, fortaleciendo el desarrollo económico y social de la comunidad.',
  icon: 'layers',
  bigWord: 'Misión',
  image: {
    src: missionConsultPhoto,
    alt: 'Asesora de COOPCASA atendiendo a una clienta en una consulta financiera, representando el bienestar financiero de los socios',
  },
};

interface VisionContent {
  tag: string;
  title: string;
  text: string;
  icon: IconName;
  /** Año objetivo mencionado en el texto; se usa también como tipografía grande de fondo. */
  targetYear: string;
  /** Palabra gigante translúcida de fondo (tipografía expresiva), espejo de missionContent.bigWord. */
  bigWord: string;
  image: { src: ImageMetadata; alt: string };
}

/** Visión: mitad derecha del panel Misión/Visión, con fondo oscuro para contrastar con Misión. */
export const visionContent: VisionContent = {
  tag: 'Nuestra visión',
  title: 'Ser la cooperativa más confiable y cercana de la región',
  text: 'Para 2030, ser reconocidos como la cooperativa de ahorro y crédito líder por su solidez, innovación tecnológica y, sobre todo, por la cercanía y el trato humano hacia cada uno de sus socios.',
  icon: 'visionBig',
  targetYear: '2030',
  bigWord: 'Visión',
  image: {
    src: visionFamilyHousePhoto,
    alt: 'Familia caminando de la mano frente a su casa, representando la visión de progreso y futuro de los socios de COOPCASA',
  },
};

export const valuesSection = {
  eyebrow: 'Valores institucionales',
  title: 'Los principios que nos definen',
};

/** Valores: tipografía y color como protagonistas, sin iconografía genérica (features/about/components/ValuesBento.astro). */
export interface ValueItem {
  title: string;
  description: string;
  accentColor: string;
}

// Reemplazar con los valores institucionales reales, si difieren.
export const values: ValueItem[] = [
  {
    title: 'Transparencia',
    description: 'Información clara y honesta en cada operación y decisión.',
    accentColor: '#1f8f22',
  },
  {
    title: 'Solidaridad',
    description: 'El bienestar de uno es el bienestar de todos.',
    accentColor: '#a89a00',
  },
  {
    title: 'Compromiso',
    description: 'Damos lo mejor por cada socio y su familia.',
    accentColor: '#1f8f22',
  },
  {
    title: 'Equidad',
    description: 'Las mismas oportunidades y trato justo para todos.',
    accentColor: '#a89a00',
  },
  {
    title: 'Cercanía',
    description: 'Trato humano y personalizado en cada interacción.',
    accentColor: '#1f8f22',
  },
  {
    title: 'Responsabilidad',
    description: 'Cuidamos el patrimonio de nuestros socios y la comunidad.',
    accentColor: '#a89a00',
  },
];
