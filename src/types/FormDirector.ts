import FormBuilder from "~/types/FormBuilder";

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
    bankName: string | undefined
  ) {
    this._builder
      .setNation(nation)
      .setSex(sex)
      .setSocialSupport(socSup)
      .setAddPers(addPersonLastName, addPersonFirstName, addPersonBirthday)
      .setHouse(houseSize, houseType)
      .setRent(rent);
    this._builder
      .setWork(workName, workStreet, workNumber, workPlz, workCity)
      .setIncome(nettoIncome)
      .setBank(bankUserName, bankAddress, IBAN, BIC, bankName);
  }
}
