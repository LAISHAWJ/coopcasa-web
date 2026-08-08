/** 1 = Persona Física · 2 = Persona Jurídica. Ids reales de `PersonTypes` en el backend. */
export type MemberPersonType = 1 | 2;

/**
 * Cuerpo del POST de afiliación.
 *
 * Espejo de `CreateMembershipLeadCommand` en
 * `members/backend/.../Features/MembershipLeads/Application/Commands/Create/`.
 *
 * No incluye `documentTypeId`: lo deriva el servidor de `personTypeId` (Física→Cédula,
 * Jurídica→RNC). Es un dato menos que un formulario público pueda equivocar.
 */
export interface MemberRequest {
  personTypeId: MemberPersonType;

  /** P. Física: el solicitante. P. Jurídica: la persona de contacto. */
  firstName: string;
  lastName: string;

  /** Cédula (Física) o RNC (Jurídica). El servidor valida el dígito verificador. */
  documentNumber: string;

  /** Solo Persona Física. `YYYY-MM-DD`. */
  birthDate?: string;

  /** Solo Persona Física. Texto libre. */
  occupation?: string;

  /** Solo Persona Jurídica. */
  companyName?: string;

  /** Solo Persona Jurídica. Texto libre. */
  economicActivity?: string;

  phone: string;
  email: string;
  addressStreet: string;
  addressReference?: string;
  addressCity: string;
  referralSource: string;
  acceptedTerms: boolean;

  /** Versión de los T&C vigente al aceptar, para que el consentimiento sea auditable. */
  termsVersion: string;

  /**
   * Generado en el cliente por envío. Hace idempotente el reintento y el doble clic: el
   * servidor tiene un índice único sobre este valor.
   */
  submissionId: string;

  /** Token del captcha. Sin él el servidor rechaza el envío. */
  captchaToken: string;

  /**
   * Honeypot. Campo oculto que una persona no ve ni llena y un bot sí. Va siempre en el
   * payload —vacío en un envío legítimo— porque omitirlo delataría para qué sirve.
   */
  website: string;
}
