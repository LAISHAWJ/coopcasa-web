import type { LoginRequest, LoginResponse } from '../types/auth';

/**
 * TODO(backend): PUBLIC_API_LOGIN_URL debe apuntar al endpoint real de
 * autenticación de la Oficina Virtual (ver .env.example).
 *
 * FLUJO DEMO: mientras esa variable no esté configurada, el login se simula
 * como exitoso para cualquier combinación de usuario/contraseña que pase las
 * validaciones de formato, únicamente para dejar demostrado el flujo de
 * navegación hacia /oficina-virtual/dashboard. El equipo de backend DEBE
 * reemplazar esta simulación por una verificación real (sesión, token,
 * manejo de errores de credenciales, etc.) antes de salir a producción.
 */
const LOGIN_API_URL = import.meta.env.PUBLIC_API_LOGIN_URL;

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  if (!LOGIN_API_URL) {
    console.warn('[auth] PUBLIC_API_LOGIN_URL no está configurada; usando flujo DEMO sin backend.');
    return { success: true };
  }

  try {
    const response = await fetch(LOGIN_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, message: 'Usuario o contraseña incorrectos.' };
    }

    return (await response.json()) as LoginResponse;
  } catch {
    return {
      success: false,
      message: 'No pudimos conectar con el servidor. Verifica tu conexión e intenta de nuevo.',
    };
  }
}
