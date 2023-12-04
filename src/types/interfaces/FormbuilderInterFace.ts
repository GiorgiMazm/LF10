export interface AdditionalPersonParams {
  lastName?: string;
  firstName?: string;
  birth?: string;
}

export interface WorkParams {
  workName?: string;
  workStreet?: string;
  workNumber?: string;
  workPlz?: number;
  workCity?: string;
}

export interface EducationParams {
  eduType?: "middle school" | "high school" | "university" | "apprenticeship";
  eduStart?: Date;
  eduEnd?: Date;
  eduProfession?: string;
}

export interface JobEducationParams {
  jobTitle?: string;
  jobBegin?: Date;
  jobEnd?: Date;
  jobEduInstitution?: string;
}

export interface TravelCostsParams {
  pendel?: boolean;
  daysAWeek?: number;
  transport?: "Public Transport" | "KFZ" | "other";
  start?: string;
  end?: string;
  transportCostMonth?: number;
}

export interface SocialSecurityParams {
  healthSecurity?:
    | "lawFamily"
    | "lawStudent"
    | "private"
    | "lawVolunteer"
    | "other";
  careSecurity?: boolean;
}

export interface ParentsParams {
  firstParent?: AdditionalPersonParams;
  firstPSex?: "Male" | "Female" | "Diverse";
  firstPNation?: string;
  firstPAddress?: string;
  secondParent?: AdditionalPersonParams;
  secondPSex?: "Male" | "Female" | "Diverse";
  secondPNation?: string;
  secondPAddress?: string;
}

export interface BankParams {
  bankUserName?: string;
  address?: string;
  IBAN?: string;
  BIC?: string;
  bankName?: string;
}
