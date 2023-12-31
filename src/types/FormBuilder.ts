import Form from "~/types/Form";
import Person from "~/types/Person";

type sex = "Male" | "Female" | "Diverse" | undefined;

export default class FormBuilder {
  private form: Form;
  constructor(
    private lastName: string,
    private firstName: string,
    private birth: string,
    private street: string,
    private houseNumber: string,
    private plz: number,
    private city: string,
    private eMail: string,
    private telephone: string
  ) {
    this.form = new Form(
      lastName,
      firstName,
      birth,
      street,
      houseNumber,
      plz,
      city,
      eMail,
      telephone
    );
  }

  setSex(sex: sex) {
    this.form.sex = sex;
    return this;
  }

  setNation(nationality: string | undefined) {
    this.form.nationality = nationality;
    return this;
  }

  setSocialSupport(socSup: boolean | undefined) {
    this.form.socSup = socSup;
    return this;
  }

  setWork(
    workName: string | undefined,
    workStreet: string | undefined,
    workNumber: string | undefined,
    workPlz: number | undefined,
    workCity: string | undefined
  ) {
    this.form.workName = workName;
    this.form.workStreet = workStreet;
    this.form.workNumber = workNumber;
    this.form.workPlz = workPlz;
    this.form.workCity = workCity;
    return this;
  }

  setOccupation(occupation: string) {
    this.form.occupation = occupation;
    return this;
  }

  setIncome(income: number | undefined) {
    this.form.income = income;
    return this;
  }

  setAddPers(
    lastName: string | undefined,
    firstName: string | undefined,
    birth: string | undefined
  ) {
    this.form.addedPerson = new Person(lastName, firstName, birth);
    return this;
  }

  setHouse(houseSize: number | undefined, houseType: string | undefined) {
    this.form.houseSize = houseSize;
    this.form.houseType = houseType;
    return this;
  }

  setRent(rent: number | undefined) {
    this.form.rent = rent;
    return rent;
  }

  setBank(
    bankUserName: string | undefined,
    address: string | undefined,
    IBAN: string | undefined,
    BIC: string | undefined,
    bankName: string | undefined
  ) {
    this.form.bankUserName = bankUserName;
    this.form.bankAddress = address;
    this.form.bankIBAN = IBAN;
    this.form.bankBIC = BIC;
    this.form.bankName = bankName;
    return this;
  }

  setProfession(prevProfession: boolean | undefined) {
    this.form.prevProfession = prevProfession;
    return this;
  }

  setEducation(
    eduType:
      | "middle school"
      | "high school"
      | "university"
      | "apprenticeship"
      | undefined,
    eduStart: Date | undefined,
    eduEnd: Date | undefined,
    eduProfession: string | undefined
  ) {
    this.form.eduType = eduType;
    this.form.eduStart = eduStart;
    this.form.eduEnd = eduEnd;
    this.form.eduProfession = eduProfession;
    return this;
  }

  setJobEducation(
    jobTitle: string | undefined,
    jobBegin: Date | undefined,
    jobEnd: Date | undefined,
    jobEduInstitution: string | undefined
  ) {
    this.form.jobTitle = jobTitle;
    this.form.jobBegin = jobBegin;
    this.form.jobEnd = jobEnd;
    this.form.jobEduInstitution = jobEduInstitution;
    return this;
  }

  setTravelCosts(
    pendel: boolean | undefined,
    daysAWeek: number | undefined,
    transport: "Public Transport" | "KFZ" | "other" | undefined,
    start: string | undefined,
    end: string | undefined,
    transportCostMonth: number | undefined
  ) {
    this.form.pendel = pendel;
    this.form.daysAWeek = daysAWeek;
    this.form.transport = transport;
    this.form.start = start;
    this.form.end = end;
    this.form.transportCostMonth = transportCostMonth;
    return this;
  }

  setSocialSecurity(
    healthSecurity:
      | "lawFamily"
      | "lawStudent"
      | "private"
      | "lawVolunteer"
      | "other"
      | undefined,
    careSecurity: boolean | undefined
  ) {
    this.form.healthSecurity = healthSecurity;
    this.form.careSecurity = careSecurity;
    return this;
  }

  setTax(taxNumber: string | undefined) {
    this.form.taxNumber = taxNumber;
    return this;
  }

  setParents(
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
    secondPAddress: string | undefined
  ) {
    this.form.firstParent = new Person(
      firstPLastName,
      firstPFirstName,
      firstPBirth
    );
    this.form.firstSex = firstPSex;
    this.form.firstNation = firstPNation;
    this.form.firstPAddress = firstPAddress;
    this.form.secondParent = new Person(
      secondPLastName,
      secondPFirstName,
      secondPBirth
    );
    this.form.secondPSex = secondPSex;
    this.form.secondPNation = secondPNation;
    this.form.secondPAddress = secondPAddress;
    return this;
  }

  buildForm() {
    return this.form;
  }
}
