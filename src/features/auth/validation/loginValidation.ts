export type LoginFormErrors = Partial<Record<'username' | 'password', string>>;

const MIN_PASSWORD_LENGTH = 6;

export function validateLoginForm(
  data: Record<string, FormDataEntryValue | null>,
): LoginFormErrors {
  const errors: LoginFormErrors = {};

  const username = String(data.username ?? '').trim();
  if (!username) errors.username = 'Ingresa tu usuario o correo electrónico.';

  const password = String(data.password ?? '');
  if (!password) errors.password = 'Ingresa tu contraseña.';
  else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Tu contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`;
  }

  return errors;
}

export function isLoginFormValid(errors: LoginFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
