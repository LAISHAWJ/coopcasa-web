/** Opciones del formulario "Hazte Socio" (features/members). */

export const referralSourceOptions = [
  { value: 'redes-sociales', label: 'Redes sociales' },
  { value: 'recomendacion', label: 'Recomendación de un socio' },
  { value: 'google', label: 'Búsqueda en Google' },
  { value: 'publicidad', label: 'Publicidad' },
  { value: 'otro', label: 'Otro' },
];

/**
 * Tipo de solicitante. Los valores son los ids REALES de la tabla `PersonTypes` del backend
 * (1 Física, 2 Jurídica), no etiquetas libres: el servidor deriva de este número qué documento
 * exigir —cédula o RNC— y qué rama del alta abrir. No renumerar.
 */
export const personTypeOptions = [
  { value: '1', label: 'Una persona' },
  { value: '2', label: 'Una empresa' },
];

/**
 * Versión de los Términos y Condiciones que muestra el formulario. Viaja con el envío para que
 * el consentimiento quede auditable: sin esto no se puede saber a qué texto dijo sí la persona.
 * **Subirla cada vez que cambie el contenido legal.**
 */
export const termsVersion = 'v1';
