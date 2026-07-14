import membersHeroImage from '@assets/images/members-affiliation-advisory.webp';

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
    src: membersHeroImage,
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
  loadingLabel: 'Enviando...',
  genericErrorMessage: 'Ocurrió un error inesperado. Intenta de nuevo.',
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

/** Campos del formulario de afiliación (features/members/components/MemberForm.astro). */
export const memberFormFields = {
  fullName: { label: 'Nombre completo', placeholder: 'Por ejemplo, Juan Pérez' },
  cedula: { label: 'Cédula', placeholder: 'XXX-XXXXXXX-X' },
  phone: { label: 'Teléfono de casa o celular', placeholder: 'Por ejemplo, 809-123-4567' },
  email: { label: 'Email', placeholder: 'Por ejemplo, nombre@ejemplo.com' },
  addressGroupLabel: 'Dirección de residencia',
  addressStreet: { label: 'Calle y número', placeholder: 'Calle y número' },
  addressReference: {
    label: 'Residencial, apartamento y/o referencias',
    placeholder: 'Residencial, apartamento y/o referencias',
  },
  addressCity: { label: 'Ciudad o municipio', placeholder: 'Ciudad o municipio' },
  branch: { label: '¿Dónde quieres afiliarte?' },
  referralSource: { label: '¿Por qué vía supiste de nosotros?' },
};
