/** Página "Hazte Socio" → hero. */
export const membersHero = {
  titleLine1: 'Hazte Socio',
  titleLine2Prefix: 'de ',
  // Resaltado con degradado de marca al final del titular.
  titleHighlight: 'COOPCASA',
  description:
    'Ser socio es ser dueño. Únete a una comunidad de más de 12,500 personas que ahorran, crecen y se apoyan mutuamente. El proceso es simple y te acompañamos en cada paso.',
  ctaLabel: 'Llenar formulario',
  image: {
    // Reemplazar por una fotografía real de asesoría/afiliación.
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    alt: 'Asesoría de afiliación en COOPCASA',
  },
};

export const membersCta = {
  title: '¡Sé parte de nuestra familia!',
  description:
    'Comienza hoy tu camino hacia la libertad financiera junto a una cooperativa que pone a las personas primero.',
  ctaLabel: 'Hazte Socio',
};

/** Panel lateral "Hazte Socio" (features/members/components/JoinPanel.astro). */
export const joinPanelContent = {
  stepBadge: '1er paso',
  title: 'Llena este formulario',
  description:
    'Llenar este formulario es el primer paso para acceder a todos los beneficios de ser socio. Luego de que lo envíes, nuestro personal de bienvenida te contactará e indicará el proceso a seguir.',
  submitLabel: 'Enviar formulario',
  // Espacios finales/iniciales intencionales: el componente concatena estos
  // textos directamente junto a los links de Términos y Privacidad.
  termsPrefix: 'Estoy de acuerdo con los ',
  termsLink: 'Términos y Condiciones',
  termsMiddle: ' y la ',
  privacyLink: 'Política de Privacidad',
  success: {
    title: '¡Formulario enviado!',
    description:
      'Gracias por tu interés en COOPCASA. Nuestro personal de bienvenida te contactará muy pronto para indicarte el proceso a seguir.',
    dismissLabel: 'Entendido',
  },
};
