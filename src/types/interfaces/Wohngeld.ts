import BAB from "~/types/interfaces/BAB";

export default interface Wohngeld {
  nation: string | undefined;
  sex: "Male" | "Female" | "Diverse" | undefined;
  socSup: boolean | undefined;
  addPersonLastName: string | undefined;
  addPersonFirstName: string | undefined;
  addPersonBirthday: string | undefined;
  houseSize: number | undefined;
  houseType: string | undefined;
  rent: number | undefined;
  workName: string | undefined;
  workStreet: string | undefined;
  workNumber: string | undefined;
  workPlz: number | undefined;
  workCity: string | undefined;
  nettoIncome: number | undefined;
  bankUserName: string | undefined;
  bankAddress: string | undefined;
  IBAN: string | undefined;
  BIC: string | undefined;
  bankName: string | undefined;
  bab: BAB;
}
