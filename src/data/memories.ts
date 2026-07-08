export const memoriesHero = {
  eyebrow: 'Transparencia',
  title: 'Memorias Anuales',
  description:
    'Nuestra biblioteca institucional. Consulta o descarga el informe de gestión de cada año y conoce a fondo nuestros resultados.',
};

export interface Memory {
  year: string;
  description: string;
  /** Gradiente CSS de la portada del "libro". */
  coverGradient: string;
  // Reemplazar por la URL real del PDF de la memoria una vez publicada.
  pdfUrl: string;
}

/** Página "Memorias Anuales". Agregar una entrada nueva cada año. */
export const memories: Memory[] = [
  {
    year: '2024',
    description:
      'Un año de crecimiento récord: más socios, más créditos colocados y nuevos programas de educación financiera.',
    coverGradient: 'linear-gradient(150deg,#0d1f14,#22a024)',
    pdfUrl: '#',
  },
  {
    year: '2023',
    description: 'Consolidación de la Oficina Virtual y expansión de nuestra red de sucursales a nivel nacional.',
    coverGradient: 'linear-gradient(150deg,#14361b,#2ba82c)',
    pdfUrl: '#',
  },
  {
    year: '2022',
    description: 'Recuperación y solidez financiera, con excedentes distribuidos entre nuestros socios copropietarios.',
    coverGradient: 'linear-gradient(150deg,#1f5230,#5bc93a)',
    pdfUrl: '#',
  },
];
