/** Página de Login (features/auth) → panel informativo izquierdo. */
export const loginPanel = {
  title: 'Bienvenido a tu\nOficina Virtual',
  description:
    'Gestiona tus ahorros, préstamos y certificados de forma segura, desde cualquier lugar y a cualquier hora.',
  points: [
    'Consulta y gestiona todos tus productos',
    'Transfiere y paga de forma segura',
    'Disponible 24/7 desde web y móvil',
  ],
  securityNote: 'Conexión cifrada y protegida',
};

export const loginForm = {
  title: 'Iniciar Sesión',
  description: 'Accede con tus credenciales de socio.',
  submitLabel: 'Iniciar Sesión',
  forgotPasswordLabel: '¿Olvidaste tu contraseña?',
  // Reemplazar por la ruta real de recuperación de contraseña cuando exista.
  forgotPasswordHref: '#',
  noAccountText: '¿Aún no eres socio?',
  noAccountCtaLabel: 'Hazte socio',
  // Aviso visible mientras la Oficina Virtual real no está integrada (ver README, sección "Flujo demo").
  demoNotice: 'Demo: la Oficina Virtual completa no está incluida en este sitio. Este acceso solo demuestra el flujo de navegación.',
};

/** Página placeholder /oficina-virtual/dashboard (destino del login demo). */
export const dashboardPlaceholder = {
  title: 'Oficina Virtual',
  description:
    'Has iniciado sesión correctamente en el flujo de demostración. Esta pantalla es un marcador de posición: el equipo de backend debe reemplazar esta página por la Oficina Virtual real una vez integrada la autenticación.',
  backToSiteLabel: 'Volver al sitio',
};
