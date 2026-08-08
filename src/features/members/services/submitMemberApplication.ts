import type { MemberRequest } from '../types/member';
import type { MemberFormErrors } from '../validation/memberValidation';

export interface MemberApplicationResult {
  success: boolean;
  message?: string;
  /**
   * Errores por campo que devolvió el servidor. El formulario los pinta debajo del input
   * correspondiente. Es lo que hace accionable un rechazo que el navegador no puede anticipar:
   * el dígito verificador de la cédula y del RNC lo valida el backend.
   */
  fieldErrors?: MemberFormErrors;
}

// TODO(backend): PUBLIC_API_MEMBERS_URL debe apuntar al endpoint real que
// reciba las solicitudes de afiliación (ver .env.example). Mientras no esté
// configurada, el envío se simula como exitoso para no bloquear la demo de
// frontend: el equipo de backend solo debe definir la variable de entorno,
// sin tocar este componente ni MemberForm.astro.
const MEMBERS_API_URL = import.meta.env.PUBLIC_API_MEMBERS_URL;

const NETWORK_MESSAGE =
  'No pudimos conectar con el servidor. Verifica tu conexión e intenta de nuevo.';

const GENERIC_MESSAGE = 'No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.';

/**
 * Nombres de campo que usa el formulario, para filtrar lo que llega del servidor. FluentValidation
 * los manda en PascalCase (`DocumentNumber`) y acá son camelCase.
 */
const FORM_FIELDS = new Set([
  'personTypeId',
  'firstName',
  'lastName',
  'documentNumber',
  'birthDate',
  'occupation',
  'companyName',
  'economicActivity',
  'phone',
  'email',
  'addressStreet',
  'addressCity',
  'referralSource',
  'acceptedTerms',
]);

const toCamelCase = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);

/**
 * Traduce el `errors` de un ProblemDetails de ASP.NET a errores por campo del formulario.
 * Los que no corresponden a un campo visible (por ejemplo `captchaToken` o `submissionId`) se
 * descartan acá y salen como mensaje general: marcar un input que no existe no ayuda a nadie.
 */
function parseFieldErrors(payload: unknown): {
  fieldErrors: MemberFormErrors;
  leftovers: string[];
} {
  const fieldErrors: MemberFormErrors = {};
  const leftovers: string[] = [];

  const errors = (payload as { errors?: Record<string, string[]> } | null)?.errors;
  if (!errors) return { fieldErrors, leftovers };

  for (const [rawField, rawMessages] of Object.entries(errors)) {
    const message = Array.isArray(rawMessages) ? rawMessages.join(' ') : String(rawMessages);
    if (!message) continue;

    const field = toCamelCase(rawField);
    if (FORM_FIELDS.has(field)) {
      fieldErrors[field as keyof MemberFormErrors] = message;
    } else {
      leftovers.push(message);
    }
  }

  return { fieldErrors, leftovers };
}

export async function submitMemberApplication(
  payload: MemberRequest,
): Promise<MemberApplicationResult> {
  if (!MEMBERS_API_URL) {
    console.warn(
      '[members] PUBLIC_API_MEMBERS_URL no está configurada; simulando envío exitoso (solo frontend, sin backend).',
    );
    return { success: true };
  }

  let response: Response;
  try {
    response = await fetch(MEMBERS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    return { success: false, message: NETWORK_MESSAGE };
  }

  // 202 Accepted: la solicitud quedó registrada para revisión. El servidor responde lo mismo si
  // ya había una solicitud en trámite para ese documento — a propósito, para no revelar qué
  // cédulas están registradas. Desde acá los dos casos son un éxito y se muestra la misma
  // confirmación.
  if (response.ok) return { success: true };

  if (response.status === 429) {
    const retryAfter = Number(response.headers.get('Retry-After'));
    const minutes = Number.isFinite(retryAfter) && retryAfter > 0 ? Math.ceil(retryAfter / 60) : 0;
    return {
      success: false,
      message: minutes
        ? `Recibimos varias solicitudes desde tu conexión. Intenta de nuevo en ${minutes} minuto(s).`
        : 'Recibimos varias solicitudes desde tu conexión. Intenta de nuevo en unos minutos.',
    };
  }

  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    // Respuesta sin cuerpo JSON (o vacía): se cae al mensaje genérico de abajo.
  }

  const { fieldErrors, leftovers } = parseFieldErrors(body);
  if (Object.keys(fieldErrors).length > 0 || leftovers.length > 0) {
    return {
      success: false,
      fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
      message: leftovers.length > 0 ? leftovers.join(' ') : undefined,
    };
  }

  const detail = (body as { detail?: string; title?: string } | null)?.detail?.trim();
  const title = (body as { detail?: string; title?: string } | null)?.title?.trim();

  return { success: false, message: detail || title || GENERIC_MESSAGE };
}
