import type { IconCard } from '@shared/types/content';
import heroImage from '@assets/images/hero-family-savings.webp';

export const hero = {
  // Reemplazar con el texto de posicionamiento y el año real de fundación.
  eyebrow: 'Cooperativa financiera · desde 2001',
  // Titular principal. `titleHighlight` se muestra con degradado animado de marca.
  titleLines: ['Tu dinero crece', 'donde la comunidad'],
  titleHighlight: 'te respalda.',
  description:
    'Ahorra, invierte y accede a préstamos con tasas justas. En COOPCASA cada socio es dueño, y cada peso que ahorras impulsa a tu comunidad.',
  primaryCtaLabel: 'Hazte socio hoy',
  secondaryCtaLabel: 'Conocer servicios',
  // Reemplazar con la cifra real de socios activos.
  membersCountLabel: '+12,500 socios',
  membersCountCaption: 'confían su futuro financiero',
  avatarColors: ['#7ee05a', '#f3e500', '#22a024', '#a3d94a'],
  image: {
    src: heroImage,
    alt: 'Familia sonriente en su hogar, representando a los socios de COOPCASA',
  },
  // Tarjetas flotantes decorativas sobre la imagen del hero.
  savingsCard: {
    label: 'Mi ahorro programado',
    amount: 'RD$ 248,750',
    growth: '+8.4% este año',
  },
  performanceCard: {
    label: 'Rendimiento trimestral',
    barHeights: ['40%', '65%', '48%', '82%', '60%', '95%'],
  },
  insuredCard: {
    title: 'Ahorro asegurado',
    subtitle: 'Regulado y protegido',
  },
};

export const quickBenefits: IconCard[] = [
  {
    title: 'Tasas justas',
    description: 'Sin costos ocultos',
    icon: 'dollar',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: '100% digital',
    description: 'Afíliate en minutos',
    icon: 'deviceMobile',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
  {
    title: 'Dividendos',
    description: 'Ganas por ser socio',
    icon: 'coin',
    iconBg: 'bg-brand-600/10',
    iconColor: '#1f8f22',
  },
  {
    title: 'Soporte humano',
    description: 'Atención cercana',
    icon: 'chat',
    iconBg: 'bg-gold-400/22',
    iconColor: '#a89a00',
  },
];
