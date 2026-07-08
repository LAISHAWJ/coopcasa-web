export type MemberFormErrors = Partial<
  Record<
    | 'fullName'
    | 'cedula'
    | 'phone'
    | 'email'
    | 'addressStreet'
    | 'addressCity'
    | 'branch'
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

  if (!asText('fullName')) errors.fullName = 'Ingresa tu nombre completo.';

  const cedula = asText('cedula');
  if (!cedula) errors.cedula = 'Ingresa tu número de cédula.';
  else if (!CEDULA_REGEX.test(cedula)) errors.cedula = 'Formato esperado: XXX-XXXXXXX-X.';

  const phone = asText('phone');
  if (!phone) errors.phone = 'Ingresa un teléfono de contacto.';
  else if (!PHONE_REGEX.test(phone)) errors.phone = 'Formato esperado: 809-123-4567.';

  const email = asText('email');
  if (!email) errors.email = 'Ingresa tu correo electrónico.';
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Ingresa un correo electrónico válido.';

  if (!asText('addressStreet')) errors.addressStreet = 'Ingresa la calle y número.';
  if (!asText('addressCity')) errors.addressCity = 'Ingresa la ciudad o municipio.';
  if (!asText('branch')) errors.branch = 'Selecciona dónde quieres afiliarte.';
  if (!asText('referralSource')) errors.referralSource = 'Selecciona una opción.';
  if (!data.acceptedTerms) errors.acceptedTerms = 'Debes aceptar los Términos y Condiciones.';

  return errors;
}

export function isMemberFormValid(errors: MemberFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
