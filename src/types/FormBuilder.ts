import Form from "~/types/Form";
import Person from "~/types/Person";
import { Sex } from "./interfaces/Sex";
import {
  WorkParams,
  AdditionalPersonParams,
  BankParams,
  EducationParams,
  JobEducationParams,
  TravelCostsParams,
  SocialSecurityParams,
  ParentsParams,
} from "./interfaces/FormbuilderInterFace";

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

  setSex(sex: Sex) {
    this.form.sex = sex;
    return this;
  }

  setNation(nationality?: string) {
    this.form.nationality = nationality;
    return this;
  }

  setSocialSupport(socSup?: boolean) {
    this.form.socSup = socSup;
    return this;
  }

  setWork(workParams: WorkParams = {}) {
    Object.assign(this.form, workParams);
    return this;
  }

  setOccupation(occupation: string) {
    this.form.occupation = occupation;
    return this;
  }

  setIncome(income?: number) {
    this.form.income = income;
    return this;
  }

  setAddPers(additionalPersonParams: AdditionalPersonParams = {}) {
    this.form.addedPerson = new Person(
      additionalPersonParams.lastName,
      additionalPersonParams.firstName,
      additionalPersonParams.birth
    );
    return this;
  }

  setHouse(houseSize?: number, houseType?: string) {
    this.form.houseSize = houseSize;
    this.form.houseType = houseType;
    return this;
  }

  setRent(rent?: number) {
    this.form.rent = rent;
    return this;
  }

  setBank(bankParams: BankParams = {}) {
    Object.assign(this.form, bankParams);
    return this;
  }

  setProfession(prevProfession?: boolean) {
    this.form.prevProfession = prevProfession;
    return this;
  }

  setEducation(educationParams: EducationParams = {}) {
    Object.assign(this.form, educationParams);
    return this;
  }

  setJobEducation(jobEducationParams: JobEducationParams = {}) {
    Object.assign(this.form, jobEducationParams);
    return this;
  }

  setTravelCosts(travelCostsParams: TravelCostsParams = {}) {
    Object.assign(this.form, travelCostsParams);
    return this;
  }

  setSocialSecurity(socialSecurityParams: SocialSecurityParams = {}) {
    Object.assign(this.form, socialSecurityParams);
    return this;
  }

  setTax(taxNumber?: string) {
    this.form.taxNumber = taxNumber;
    return this;
  }

  setParents(parentsParams: ParentsParams = {}) {
    this.form.firstParent = new Person(
      parentsParams.firstParent?.lastName,
      parentsParams.firstParent?.firstName,
      parentsParams.firstParent?.birth
    );
    this.form.firstSex = parentsParams.firstPSex;
    this.form.firstNation = parentsParams.firstPNation;
    this.form.firstPAddress = parentsParams.firstPAddress;

    this.form.secondParent = new Person(
      parentsParams.secondParent?.lastName,
      parentsParams.secondParent?.firstName,
      parentsParams.secondParent?.birth
    );
    this.form.secondPSex = parentsParams.secondPSex;
    this.form.secondPNation = parentsParams.secondPNation;
    this.form.secondPAddress = parentsParams.secondPAddress;

    return this;
  }

  buildForm() {
    return this.form;
  }
}
