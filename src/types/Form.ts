import Person from "~/types/Person";

import { sex } from "~/types/sex";

export default class Form {
  private _prevProfession: boolean | undefined;
  private _eduType:
    | "middle school"
    | "high school"
    | "university"
    | "apprenticeship"
    | undefined;
  private _eduStart: Date | undefined;
  private _eduEnd: Date | undefined;
  private _eduProfession: string | undefined;
  private _jobTitle: string | undefined;
  private _jobBegin: Date | undefined;
  private _jobEnd: Date | undefined;
  private _jobEduInstitution: string | undefined;
  private _pendel: boolean | undefined;
  private _daysAWeek: number | undefined;
  private _transport: "Public Transport" | "KFZ" | "other" | undefined;
  private _start: string | undefined;
  private _end: string | undefined;
  private _transportCostMonth: number | undefined;
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
  private _sex: sex;
  private _bankName: string | undefined;
  private _healthSecurity:
    | "lawFamily"
    | "lawStudent"
    | "private"
    | "lawVolunteer"
    | "other"
    | undefined;
  private _careSecurity: boolean | undefined;
  private _taxNumber: string | undefined;
  private _firstParent: Person | undefined;
  private _firstSex: sex;
  private _firstNation: string | undefined;
  private _firstPAddress: string | undefined;
  private _applicant: Person;
  private _secondParent: Person | undefined;
  private _secondPSex: sex;
  private _secondPNation: string | undefined;
  private _secondPAddress: string | undefined;

  constructor(
    private _lastName: string,
    private _firstName: string,
    private _birth: string,
    private _street: string,
    private _houseNumber: string,
    private _plz: number,
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
  set healthSecurity(
    value:
      | "lawFamily"
      | "lawStudent"
      | "private"
      | "lawVolunteer"
      | "other"
      | undefined
  ) {
    this._healthSecurity = value;
  }

  set careSecurity(value: boolean | undefined) {
    this._careSecurity = value;
  }

  set taxNumber(value: string | undefined) {
    this._taxNumber = value;
  }

  set firstParent(value: Person | undefined) {
    this._firstParent = value;
  }

  set firstSex(value: sex) {
    this._firstSex = value;
  }

  set firstNation(value: string | undefined) {
    this._firstNation = value;
  }

  set firstPAddress(value: string | undefined) {
    this._firstPAddress = value;
  }

  set secondParent(value: Person | undefined) {
    this._secondParent = value;
  }

  set secondPSex(value: "Male" | "Female" | "Diverse" | undefined) {
    this._secondPSex = value;
  }

  set secondPNation(value: string | undefined) {
    this._secondPNation = value;
  }

  set secondPAddress(value: string | undefined) {
    this._secondPAddress = value;
  }
  set bankName(value: string | undefined) {
    this._bankName = value;
  }

  set prevProfession(value: boolean | undefined) {
    this._prevProfession = value;
  }

  set eduType(
    value:
      | "middle school"
      | "high school"
      | "university"
      | "apprenticeship"
      | undefined
  ) {
    this._eduType = value;
  }

  set eduStart(value: Date | undefined) {
    this._eduStart = value;
  }

  set eduEnd(value: Date | undefined) {
    this._eduEnd = value;
  }

  set eduProfession(value: string | undefined) {
    this._eduProfession = value;
  }

  set jobTitle(value: string | undefined) {
    this._jobTitle = value;
  }

  set jobBegin(value: Date | undefined) {
    this._jobBegin = value;
  }

  set jobEnd(value: Date | undefined) {
    this._jobEnd = value;
  }

  set jobEduInstitution(value: string | undefined) {
    this._jobEduInstitution = value;
  }

  set pendel(value: boolean | undefined) {
    this._pendel = value;
  }

  set daysAWeek(value: number | undefined) {
    this._daysAWeek = value;
  }

  set transport(value: "Public Transport" | "KFZ" | "other" | undefined) {
    this._transport = value;
  }

  set start(value: string | undefined) {
    this._start = value;
  }

  get end(): string | undefined {
    return this._end;
  }

  set end(value: string | undefined) {
    this._end = value;
  }

  set transportCostMonth(value: number | undefined) {
    this._transportCostMonth = value;
  }

  set sex(value: "Male" | "Female" | "Diverse" | undefined) {
    this._sex = value;
  }

  set workName(value: string | undefined) {
    this._workName = value;
  }

  set workStreet(value: string | undefined) {
    this._workStreet = value;
  }

  set workNumber(value: string | undefined) {
    this._workNumber = value;
  }

  set workPlz(value: number | undefined) {
    this._workPlz = value;
  }

  set workCity(value: string | undefined) {
    this._workCity = value;
  }

  set occupation(value: string) {
    this._occupation = value;
  }

  set income(value: number | undefined) {
    this._income = value;
  }

  set addedPerson(value: Person) {
    this._addedPerson = value;
  }

  set houseSize(value: number | undefined) {
    this._houseSize = value;
  }

  set houseType(value: string | undefined) {
    this._houseType = value;
  }

  set rent(value: number | undefined) {
    this._rent = value;
  }

  set bankUserName(value: string | undefined) {
    this._bankUserName = value;
  }

  set bankAddress(value: string | undefined) {
    this._bankAddress = value;
  }

  set bankIBAN(value: string | undefined) {
    this._bankIBAN = value;
  }

  set bankBIC(value: string | undefined) {
    this._bankBIC = value;
  }
  set nationality(value: string | undefined) {
    this._nationality = value;
  }

  set socSup(value: boolean | undefined) {
    this._socSup = value;
  }
}
