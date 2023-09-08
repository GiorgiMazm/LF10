import Form from "~/types/Form";
import Person from "~/types/Person";
import FormDirector from "~/types/FormDirector";

export default class FormBuilder {
  private form: Form;
  constructor(
    private lastName: string,
    private firstName: string,
    private birth: string,
    private street: string,
    private houseNumber: string,
    private plz: Number,
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

  setSex(sex: "Male" | "Female" | "Diverse" | undefined) {
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
    return this;
  }

  buildForm() {
    return this.form;
  }
}
