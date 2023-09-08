import Person from "~/types/Person";

export default class Form {
  get applicant(): Person {
    return this._applicant;
  }

  set applicant(value: Person) {
    this._applicant = value;
  }

  get sex(): "Male" | "Female" | "Diverse" | undefined {
    return this._sex;
  }

  set sex(value: "Male" | "Female" | "Diverse" | undefined) {
    this._sex = value;
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

  get birth(): string {
    return this._birth;
  }

  set birth(value: string) {
    this._birth = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get houseNumber(): string {
    return this._houseNumber;
  }

  set houseNumber(value: string) {
    this._houseNumber = value;
  }

  get plz(): Number {
    return this._plz;
  }

  set plz(value: Number) {
    this._plz = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get eMail(): string {
    return this._eMail;
  }

  set eMail(value: string) {
    this._eMail = value;
  }

  get workName(): string | undefined {
    return this._workName;
  }

  set workName(value: string | undefined) {
    this._workName = value;
  }

  get workStreet(): string | undefined {
    return this._workStreet;
  }

  set workStreet(value: string | undefined) {
    this._workStreet = value;
  }

  get workNumber(): string | undefined {
    return this._workNumber;
  }

  set workNumber(value: string | undefined) {
    this._workNumber = value;
  }

  get workPlz(): number | undefined {
    return this._workPlz;
  }

  set workPlz(value: number | undefined) {
    this._workPlz = value;
  }

  get workCity(): string | undefined {
    return this._workCity;
  }

  set workCity(value: string | undefined) {
    this._workCity = value;
  }

  get occupation(): string | undefined {
    return this._occupation;
  }

  set occupation(value: string) {
    this._occupation = value;
  }

  get income(): number | undefined {
    return this._income;
  }

  set income(value: number | undefined) {
    this._income = value;
  }

  get addedPerson(): Person | undefined {
    return this._addedPerson;
  }

  set addedPerson(value: Person) {
    this._addedPerson = value;
  }

  get houseSize(): number | undefined {
    return this._houseSize;
  }

  set houseSize(value: number | undefined) {
    this._houseSize = value;
  }

  get houseType(): string | undefined {
    return this._houseType;
  }

  set houseType(value: string | undefined) {
    this._houseType = value;
  }

  get rent(): number | undefined {
    return this._rent;
  }

  set rent(value: number | undefined) {
    this._rent = value;
  }

  get bankUserName(): string | undefined {
    return this._bankUserName;
  }

  set bankUserName(value: string | undefined) {
    this._bankUserName = value;
  }

  get bankAddress(): string | undefined {
    return this._bankAddress;
  }

  set bankAddress(value: string | undefined) {
    this._bankAddress = value;
  }

  get bankIBAN(): string | undefined {
    return this._bankIBAN;
  }

  set bankIBAN(value: string | undefined) {
    this._bankIBAN = value;
  }

  get bankBIC(): string | undefined {
    return this._bankBIC;
  }

  set bankBIC(value: string | undefined) {
    this._bankBIC = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }
  private _applicant: Person;

  get nationality(): string | undefined {
    return this._nationality;
  }

  set nationality(value: string | undefined) {
    this._nationality = value;
  }

  private _nationality: string | undefined;
  private _socSup: boolean | undefined;
  private _workName: string | undefined;
  private _workStreet: string | undefined;
  private _workNumber: string | undefined;
  private _workPlz: number | undefined;
  private _workCity: string | undefined;
  private _occupation: string | undefined;
  private _income: number | undefined;
  private _addedPerson: Person | undefined;
  private _houseSize: number | undefined;
  private _houseType: string | undefined;
  private _rent: number | undefined;
  private _bankUserName: string | undefined;
  private _bankAddress: string | undefined;
  private _bankIBAN: string | undefined;
  private _bankBIC: string | undefined;

  get socSup(): boolean | undefined {
    return this._socSup;
  }

  set socSup(value: boolean | undefined) {
    this._socSup = value;
  }

  private _sex: "Male" | "Female" | "Diverse" | undefined;
  constructor(
    private _lastName: string,
    private _firstName: string,
    private _birth: string,
    private _street: string,
    private _houseNumber: string,
    private _plz: Number,
    private _city: string,
    private _eMail: string,
    private _telephone: string
  ) {
    this._applicant = new Person(_lastName, _firstName, _birth);
    this._street = _street;
    this._houseNumber = _houseNumber;
    this._plz = _plz;
    this._city = _city;
    this._eMail = _eMail;
    this._telephone = _telephone;
  }
}
