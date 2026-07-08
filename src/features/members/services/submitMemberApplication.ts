import type { MemberRequest } from '../types/member';

export interface MemberApplicationResult {
  success: boolean;
  message?: string;
}

// TODO(backend): PUBLIC_API_MEMBERS_URL debe apuntar al endpoint real que
// reciba las solicitudes de afiliación (ver .env.example). Mientras no esté
// configurada, el envío se simula como exitoso para no bloquear la demo de
// frontend: el equipo de backend solo debe definir la variable de entorno,
// sin tocar este componente ni MemberForm.astro.
const MEMBERS_API_URL = import.meta.env.PUBLIC_API_MEMBERS_URL;

export async function submitMemberApplication(payload: MemberRequest): Promise<MemberApplicationResult> {
  if (!MEMBERS_API_URL) {
    console.warn(
      '[members] PUBLIC_API_MEMBERS_URL no está configurada; simulando envío exitoso (solo frontend, sin backend).'
    );
    return { success: true };
  }

  try {
    const response = await fetch(MEMBERS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, message: 'No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.' };
    }

    return { success: true };
  } catch {
    return { success: false, message: 'No pudimos conectar con el servidor. Verifica tu conexión e intenta de nuevo.' };
  }
}
