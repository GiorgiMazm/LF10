import Bafog from "~/types/interfaces/Bafog";

export default interface BAB {
  nation: string | undefined;
  prevProfession: boolean | undefined;
  eduType:
    | "middle school"
    | "high school"
    | "university"
    | "apprenticeship"
    | undefined;
  eduStart: Date | undefined;
  eduEnd: Date | undefined;
  eduProfession: string | undefined;
  jobTitle: string | undefined;
  jobBegin: Date | undefined;
  jobEnd: Date | undefined;
  jobEduInstitution: string | undefined;
  pendel: boolean | undefined;
  daysAWeek: number | undefined;
  transport: "Public Transport" | "KFZ" | "other" | undefined;
  start: string | undefined;
  end: string | undefined;
  transportCostMonth: number | undefined;
  bafog: Bafog;
}
