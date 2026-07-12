import type { IconName } from '@shared/config/icons';

/** Tarjeta genérica icono + título (+ descripción opcional) usada en varias secciones. */
export interface IconCard {
  title: string;
  description?: string;
  icon: IconName;
  /** Clase Tailwind para el fondo del contenedor del icono, ej: "bg-brand-600/10". */
  iconBg: string;
  /** Color del trazo del icono (hex), ej: "#1f8f22". */
  iconColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  /** Valor numérico final al que llega la animación de conteo. */
  target: number;
  /** Prefijo mostrado antes del número, ej: "+" o "RD$". */
  prefix?: string;
  /** Sufijo mostrado después del número, ej: "B" o "%". */
  suffix?: string;
  /** Decimales a mostrar (0 por defecto). */
  decimals?: number;
  icon: IconName;
}
