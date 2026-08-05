export interface MemberRequest {
  fullName: string;
  cedula: string;
  phone: string;
  email: string;
  addressStreet: string;
  addressReference?: string;
  addressCity: string;
  referralSource: string;
  acceptedTerms: boolean;
}
