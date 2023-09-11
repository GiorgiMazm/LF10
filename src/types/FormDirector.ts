import FormBuilder from "~/types/FormBuilder";

interface wohngeld_interface{
  nation: string | undefined,
  sex: "Male" | "Female" | "Diverse" | undefined,
  socSup: boolean | undefined,
  addPersonLastName: string | undefined,
  addPersonFirstName: string | undefined,
  addPersonBirthday: string | undefined,
  houseSize: number | undefined,
  houseType: string | undefined,
  rent: number | undefined,
  workName: string | undefined,
  workStreet: string | undefined,
  workNumber: string | undefined,
  workPlz: number | undefined,
  workCity: string | undefined,
  nettoIncome: number | undefined,
  bankUserName: string | undefined,
  bankAddress: string | undefined,
  IBAN: string | undefined,
  BIC: string | undefined,
  bankName: string | undefined,
  bab: BAB_interface
}

interface BAB_interface{
  nation: string | undefined,
  prevProfession: boolean | undefined,
  eduType: "middle school" | "high school" | "university" | "apprenticeship" | undefined,
  eduStart: Date | undefined,
  eduEnd: Date | undefined,
  eduProfession: string | undefined,
  jobTitle: string | undefined,
  jobBegin: Date | undefined,
  jobEnd: Date | undefined,
  jobEduInstitution: string | undefined,
  pendel: boolean | undefined,
  daysAWeek: number | undefined,
  transport: "Public Transport" | "KFZ" | "other" | undefined,
  start: string | undefined,
  end: string | undefined,
  transportCostMonth: number | undefined,
  bafog: bafog_interface
}

interface bafog_interface{
  healthSecurity: "lawFamily" | "lawStudent" | "private" | "lawVolunteer" | "other" | undefined,
  careSecurity: boolean | undefined,
  taxNumber: string | undefined,
  eduType: "middle school" | "high school" | "university" | "apprenticeship" | undefined,
  eduStart: Date | undefined,
  eduEnd: Date | undefined,
  eduProfession: string | undefined,
  nation: string | undefined,
  bankUserName: string | undefined,
  bankAddress: string | undefined,
  IBAN: string | undefined,
  BIC: string | undefined,
  bankName: string | undefined,
  firstPLastName: string | undefined,
  firstPFirstName: string | undefined,
  firstPBirth: string | undefined,
  firstPSex: "Male" | "Female" | "Diverse" | undefined,
  firstPNation: string | undefined,
  firstPAddress: string | undefined,
  secondPLastName: string | undefined,
  secondPFirstName: string | undefined,
  secondPBirth: string | undefined,
  secondPSex: "Male" | "Female" | "Diverse" | undefined,
  secondPNation: string | undefined,
  secondPAddress: string | undefined,
  nettoIncome: number | undefined,
  jobTitle: string | undefined,
  jobBegin: Date | undefined,
  jobEnd: Date | undefined,
  jobEduInstitution: string | undefined
}

export default class FormDirector {
  private _builder: FormBuilder;
  get builder(): FormBuilder {
    return this._builder;
  }

  set builder(value: FormBuilder) {
    this._builder = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get adStreet(): string {
    return this._adStreet;
  }

  set adStreet(value: string) {
    this._adStreet = value;
  }

  get adNumber(): string {
    return this._adNumber;
  }

  set adNumber(value: string) {
    this._adNumber = value;
  }

  get adPlz(): number {
    return this._adPlz;
  }

  set adPlz(value: number) {
    this._adPlz = value;
  }

  get adCity(): string {
    return this._adCity;
  }

  set adCity(value: string) {
    this._adCity = value;
  }

  get eMailAdd(): string {
    return this._eMailAdd;
  }

  set eMailAdd(value: string) {
    this._eMailAdd = value;
  }

  get telNum(): string {
    return this._telNum;
  }

  set telNum(value: string) {
    this._telNum = value;
  }

  constructor(
    private _lastName: string,
    private _firstName: string,
    private _birthday: string,
    private _adStreet: string,
    private _adNumber: string,
    private _adPlz: number,
    private _adCity: string,
    private _eMailAdd: string,
    private _telNum: string
  ) {
    this._builder = new FormBuilder(
      _lastName,
      _firstName,
      _birthday,
      _adStreet,
      _adNumber,
      _adPlz,
      _adCity,
      _eMailAdd,
      _telNum
    );
  }

  buildWohngeldantrag(
    wohngeldParams: wohngeld_interface,
  ) {
    this._builder
      .setNation(wohngeldParams.nation)
      .setSex(wohngeldParams.sex)
      .setSocialSupport(wohngeldParams.socSup)
      .setAddPers(wohngeldParams.addPersonLastName, 
        wohngeldParams.addPersonFirstName, 
        wohngeldParams.addPersonBirthday)
      .setHouse(wohngeldParams.houseSize, 
        wohngeldParams.houseType)
      .setRent(wohngeldParams.rent);
    this._builder
      .setWork(wohngeldParams.workName, 
        wohngeldParams.workStreet, 
        wohngeldParams.workNumber, 
        wohngeldParams.workPlz, 
        wohngeldParams.workCity)
      .setIncome(wohngeldParams.nettoIncome)
      .setBank(
        wohngeldParams.bankUserName, 
        wohngeldParams.bankAddress, 
        wohngeldParams.IBAN, 
        wohngeldParams.BIC, 
        wohngeldParams.bankName);
    this.buildBABAntrag(
      wohngeldParams.bab
      )
  }

  buildBABAntrag(
    babParams: BAB_interface
  ) {
    this._builder
    .setNation(babParams.nation)
    .setProfession(babParams.prevProfession)
    .setEducation(babParams.eduType, 
      babParams.eduStart, 
      babParams.eduEnd, 
      babParams.eduProfession)
    .setJobEducation(babParams.jobTitle, 
      babParams.jobBegin, 
      babParams.jobEnd, 
      babParams.jobEduInstitution)
    .setTravelCosts(babParams.pendel, 
      babParams.daysAWeek, 
      babParams.transport, 
      babParams.start, 
      babParams.end, 
      babParams.transportCostMonth);
    this.buildBafog(
      babParams.bafog)
  }

  buildBafog(
    bafogParams: bafog_interface
  ) {
    this._builder
    .setJobEducation(bafogParams.jobTitle, 
      bafogParams.jobBegin, 
      bafogParams.jobEnd, 
      bafogParams.jobEduInstitution)
    .setNation(bafogParams.nation)
    .setBank(bafogParams.bankUserName, 
      bafogParams.bankAddress, 
      bafogParams.IBAN, 
      bafogParams.BIC, 
      bafogParams.bankName)
    .setSocialSecurity(bafogParams.healthSecurity, 
      bafogParams.careSecurity)
    .setTax(bafogParams.taxNumber)
    .setParents(bafogParams.firstPLastName, 
      bafogParams.firstPFirstName, bafogParams.firstPBirth, 
      bafogParams.firstPSex, 
      bafogParams.firstPNation, 
      bafogParams.firstPAddress, 
      bafogParams.secondPLastName, 
      bafogParams.secondPFirstName, 
      bafogParams.secondPBirth, 
      bafogParams.secondPSex, 
      bafogParams.secondPNation, 
      bafogParams.secondPAddress)
    .setIncome(bafogParams.nettoIncome)
    .setEducation(bafogParams.eduType, 
      bafogParams.eduStart, 
      bafogParams.eduEnd, 
      bafogParams.eduProfession)
  }
}
