import { memberValidationMessages as messages } from '@data/membersPage';

export type MemberFormErrors = Partial<
  Record<
    | 'fullName'
    | 'cedula'
    | 'phone'
    | 'email'
    | 'addressStreet'
    | 'addressCity'
    | 'referralSource'
    | 'acceptedTerms',
    string
  >
>;

// Cédula dominicana: XXX-XXXXXXX-X (con o sin guiones).
const CEDULA_REGEX = /^\d{3}-?\d{7}-?\d{1}$/;
// Teléfono dominicano: XXX-XXX-XXXX (con o sin guiones).
const PHONE_REGEX = /^\d{3}-?\d{3}-?\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateMemberForm(
  data: Record<string, FormDataEntryValue | boolean | null>,
): MemberFormErrors {
  const errors: MemberFormErrors = {};
  const asText = (key: string) => String(data[key] ?? '').trim();

  if (!asText('fullName')) errors.fullName = messages.fullNameRequired;

  const cedula = asText('cedula');
  if (!cedula) errors.cedula = messages.cedulaRequired;
  else if (!CEDULA_REGEX.test(cedula)) errors.cedula = messages.cedulaInvalid;

  const phone = asText('phone');
  if (!phone) errors.phone = messages.phoneRequired;
  else if (!PHONE_REGEX.test(phone)) errors.phone = messages.phoneInvalid;

  const email = asText('email');
  if (!email) errors.email = messages.emailRequired;
  else if (!EMAIL_REGEX.test(email)) errors.email = messages.emailInvalid;

  if (!asText('addressStreet')) errors.addressStreet = messages.addressStreetRequired;
  if (!asText('addressCity')) errors.addressCity = messages.addressCityRequired;
  if (!asText('referralSource')) errors.referralSource = messages.referralSourceRequired;
  if (!data.acceptedTerms) errors.acceptedTerms = messages.acceptedTermsRequired;

  return errors;
}

export function isMemberFormValid(errors: MemberFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
