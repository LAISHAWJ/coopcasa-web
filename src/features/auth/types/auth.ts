export interface LoginRequest {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  // TODO(backend): agregar aquí los campos reales de la sesión (token, socio, expiración, etc.)
  // una vez que el backend defina el contrato de la respuesta.
}
