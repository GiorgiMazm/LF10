import Person from "~/types/Person";

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
  private _sex: "Male" | "Female" | "Diverse" | undefined;
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
  private _firstSex: "Male" | "Female" | "Diverse" | undefined;
  private _firstNation: string | undefined;
  private _firstPAddress: string | undefined;

  get healthSecurity():
    | "lawFamily"
    | "lawStudent"
    | "private"
    | "lawVolunteer"
    | "other"
    | undefined {
    return this._healthSecurity;
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

  get careSecurity(): boolean | undefined {
    return this._careSecurity;
  }

  set careSecurity(value: boolean | undefined) {
    this._careSecurity = value;
  }

  get taxNumber(): string | undefined {
    return this._taxNumber;
  }

  set taxNumber(value: string | undefined) {
    this._taxNumber = value;
  }

  get firstParent(): Person | undefined {
    return this._firstParent;
  }

  set firstParent(value: Person | undefined) {
    this._firstParent = value;
  }

  get firstSex(): "Male" | "Female" | "Diverse" | undefined {
    return this._firstSex;
  }

  set firstSex(value: "Male" | "Female" | "Diverse" | undefined) {
    this._firstSex = value;
  }

  get firstNation(): string | undefined {
    return this._firstNation;
  }

  set firstNation(value: string | undefined) {
    this._firstNation = value;
  }

  get firstPAddress(): string | undefined {
    return this._firstPAddress;
  }

  set firstPAddress(value: string | undefined) {
    this._firstPAddress = value;
  }

  get secondParent(): Person | undefined {
    return this._secondParent;
  }

  set secondParent(value: Person | undefined) {
    this._secondParent = value;
  }

  get secondPSex(): "Male" | "Female" | "Diverse" | undefined {
    return this._secondPSex;
  }

  set secondPSex(value: "Male" | "Female" | "Diverse" | undefined) {
    this._secondPSex = value;
  }

  get secondPNation(): string | undefined {
    return this._secondPNation;
  }

  set secondPNation(value: string | undefined) {
    this._secondPNation = value;
  }

  get secondPAddress(): string | undefined {
    return this._secondPAddress;
  }

  set secondPAddress(value: string | undefined) {
    this._secondPAddress = value;
  }

  private _secondParent: Person | undefined;
  private _secondPSex: "Male" | "Female" | "Diverse" | undefined;
  private _secondPNation: string | undefined;
  private _secondPAddress: string | undefined;

  get bankName(): string | undefined {
    return this._bankName;
  }

  set bankName(value: string | undefined) {
    this._bankName = value;
  }

  get prevProfession(): boolean | undefined {
    return this._prevProfession;
  }

  set prevProfession(value: boolean | undefined) {
    this._prevProfession = value;
  }

  get eduType():
    | "middle school"
    | "high school"
    | "university"
    | "apprenticeship"
    | undefined {
    return this._eduType;
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

  get eduStart(): Date | undefined {
    return this._eduStart;
  }

  set eduStart(value: Date | undefined) {
    this._eduStart = value;
  }

  get eduEnd(): Date | undefined {
    return this._eduEnd;
  }

  set eduEnd(value: Date | undefined) {
    this._eduEnd = value;
  }

  get eduProfession(): string | undefined {
    return this._eduProfession;
  }

  set eduProfession(value: string | undefined) {
    this._eduProfession = value;
  }

  get jobTitle(): string | undefined {
    return this._jobTitle;
  }

  set jobTitle(value: string | undefined) {
    this._jobTitle = value;
  }

  get jobBegin(): Date | undefined {
    return this._jobBegin;
  }

  set jobBegin(value: Date | undefined) {
    this._jobBegin = value;
  }

  get jobEnd(): Date | undefined {
    return this._jobEnd;
  }

  set jobEnd(value: Date | undefined) {
    this._jobEnd = value;
  }

  get jobEduInstitution(): string | undefined {
    return this._jobEduInstitution;
  }

  set jobEduInstitution(value: string | undefined) {
    this._jobEduInstitution = value;
  }

  get pendel(): boolean | undefined {
    return this._pendel;
  }

  set pendel(value: boolean | undefined) {
    this._pendel = value;
  }

  get daysAWeek(): number | undefined {
    return this._daysAWeek;
  }

  set daysAWeek(value: number | undefined) {
    this._daysAWeek = value;
  }

  get transport(): "Public Transport" | "KFZ" | "other" | undefined {
    return this._transport;
  }

  set transport(value: "Public Transport" | "KFZ" | "other" | undefined) {
    this._transport = value;
  }

  get start(): string | undefined {
    return this._start;
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

  get transportCostMonth(): number | undefined {
    return this._transportCostMonth;
  }

  set transportCostMonth(value: number | undefined) {
    this._transportCostMonth = value;
  }

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
  get socSup(): boolean | undefined {
    return this._socSup;
  }

  set socSup(value: boolean | undefined) {
    this._socSup = value;
  }

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
