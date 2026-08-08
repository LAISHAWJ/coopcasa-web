import { memberValidationMessages as messages } from '@data/membersPage';

export type MemberFormErrors = Partial<
  Record<
    | 'personTypeId'
    | 'firstName'
    | 'lastName'
    | 'documentNumber'
    | 'birthDate'
    | 'occupation'
    | 'companyName'
    | 'economicActivity'
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
// RNC dominicano: X-XX-XXXXX-X, 9 dígitos (con o sin guiones).
const RNC_REGEX = /^\d{1}-?\d{2}-?\d{5}-?\d{1}$/;
// Teléfono dominicano: XXX-XXX-XXXX (con o sin guiones).
const PHONE_REGEX = /^\d{3}-?\d{3}-?\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LEGAL_ENTITY = '2';
const MINIMUM_AGE = 18;

/**
 * Estas reglas validan **formato**, no el dígito verificador: el checksum de la JCE (cédula) y
 * de la DGII (RNC) lo corre el backend con el mismo helper que usa el alta de socio. Duplicar
 * esos algoritmos acá sería mantener dos copias de la misma aritmética, y la del servidor es la
 * que manda. Cuando el backend rechaza el documento, `submitMemberApplication` trae el mensaje
 * por campo y lo pinta debajo del input.
 */
export function validateMemberForm(
  data: Record<string, FormDataEntryValue | boolean | null>,
): MemberFormErrors {
  const errors: MemberFormErrors = {};
  const asText = (key: string) => String(data[key] ?? '').trim();

  const personTypeId = asText('personTypeId');
  if (!personTypeId) errors.personTypeId = messages.personTypeRequired;

  const isLegalEntity = personTypeId === LEGAL_ENTITY;

  if (!asText('firstName')) errors.firstName = messages.firstNameRequired;
  if (!asText('lastName')) errors.lastName = messages.lastNameRequired;

  const documentNumber = asText('documentNumber');
  if (!documentNumber) {
    errors.documentNumber = isLegalEntity ? messages.rncRequired : messages.cedulaRequired;
  } else if (isLegalEntity) {
    if (!RNC_REGEX.test(documentNumber)) errors.documentNumber = messages.rncInvalid;
  } else if (!CEDULA_REGEX.test(documentNumber)) {
    errors.documentNumber = messages.cedulaInvalid;
  }

  // Los requisitos que dependen del tipo: pedirle fecha de nacimiento a una empresa, o razón
  // social a una persona, dejaría al visitante trabado en un campo que su formulario no muestra.
  if (isLegalEntity) {
    if (!asText('companyName')) errors.companyName = messages.companyNameRequired;
    if (!asText('economicActivity')) {
      errors.economicActivity = messages.economicActivityRequired;
    }
  } else {
    const birthDate = asText('birthDate');
    if (!birthDate) errors.birthDate = messages.birthDateRequired;
    else if (!isAdult(birthDate)) errors.birthDate = messages.birthDateInvalid;

    if (!asText('occupation')) errors.occupation = messages.occupationRequired;
  }

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

/** Misma regla que el backend: 18 años cumplidos, y nada de fechas futuras. */
function isAdult(value: string): boolean {
  const birthDate = new Date(`${value}T00:00:00`);
  if (Number.isNaN(birthDate.getTime())) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (birthDate > today) return false;

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDelta = today.getMonth() - birthDate.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age >= MINIMUM_AGE;
}

export function isMemberFormValid(errors: MemberFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
