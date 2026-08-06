import { loginValidationMessages as messages } from '@data/auth';

export type LoginFormErrors = Partial<Record<'username' | 'password', string>>;

const MIN_PASSWORD_LENGTH = 6;

export function validateLoginForm(
  data: Record<string, FormDataEntryValue | null>,
): LoginFormErrors {
  const errors: LoginFormErrors = {};

  const username = String(data.username ?? '').trim();
  if (!username) errors.username = messages.usernameRequired;

  const password = String(data.password ?? '');
  if (!password) errors.password = messages.passwordRequired;
  else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = messages.passwordTooShort(MIN_PASSWORD_LENGTH);
  }

  return errors;
}

export function isLoginFormValid(errors: LoginFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
