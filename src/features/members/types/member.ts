export interface MemberRequest {
  fullName: string;
  cedula: string;
  phone: string;
  email: string;
  addressStreet: string;
  addressReference?: string;
  addressCity: string;
  branch: string;
  referralSource: string;
  acceptedTerms: boolean;
}
