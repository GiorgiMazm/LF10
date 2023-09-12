export default interface Bafog {
  healthSecurity:
    | "lawFamily"
    | "lawStudent"
    | "private"
    | "lawVolunteer"
    | "other"
    | undefined;
  careSecurity: boolean | undefined;
  taxNumber: string | undefined;
  eduType:
    | "middle school"
    | "high school"
    | "university"
    | "apprenticeship"
    | undefined;
  eduStart: Date | undefined;
  eduEnd: Date | undefined;
  eduProfession: string | undefined;
  nation: string | undefined;
  bankUserName: string | undefined;
  bankAddress: string | undefined;
  IBAN: string | undefined;
  BIC: string | undefined;
  bankName: string | undefined;
  firstPLastName: string | undefined;
  firstPFirstName: string | undefined;
  firstPBirth: string | undefined;
  firstPSex: "Male" | "Female" | "Diverse" | undefined;
  firstPNation: string | undefined;
  firstPAddress: string | undefined;
  secondPLastName: string | undefined;
  secondPFirstName: string | undefined;
  secondPBirth: string | undefined;
  secondPSex: "Male" | "Female" | "Diverse" | undefined;
  secondPNation: string | undefined;
  secondPAddress: string | undefined;
  nettoIncome: number | undefined;
  jobTitle: string | undefined;
  jobBegin: Date | undefined;
  jobEnd: Date | undefined;
  jobEduInstitution: string | undefined;
}
