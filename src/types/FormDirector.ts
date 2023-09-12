import FormBuilder from "~/types/FormBuilder";
import BAB from "~/types/interfaces/BAB";
import Bafog from "~/types/interfaces/Bafog";
import Wohngeld from "~/types/interfaces/Wohngeld";

export default class FormDirector {
  private _builder: FormBuilder;
  get builder(): FormBuilder {
    return this._builder;
  }

  set builder(value: FormBuilder) {
    this._builder = value;
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

  buildWohngeldantrag(wohngeldParams: Wohngeld) {
    this._builder
      .setNation(wohngeldParams.nation)
      .setSex(wohngeldParams.sex)
      .setSocialSupport(wohngeldParams.socSup)
      .setAddPers(
        wohngeldParams.addPersonLastName,
        wohngeldParams.addPersonFirstName,
        wohngeldParams.addPersonBirthday
      )
      .setHouse(wohngeldParams.houseSize, wohngeldParams.houseType)
      .setRent(wohngeldParams.rent);
    this._builder
      .setWork(
        wohngeldParams.workName,
        wohngeldParams.workStreet,
        wohngeldParams.workNumber,
        wohngeldParams.workPlz,
        wohngeldParams.workCity
      )
      .setIncome(wohngeldParams.nettoIncome)
      .setBank(
        wohngeldParams.bankUserName,
        wohngeldParams.bankAddress,
        wohngeldParams.IBAN,
        wohngeldParams.BIC,
        wohngeldParams.bankName
      );
    this.buildBABAntrag(wohngeldParams.bab);
  }

  buildBABAntrag(babParams: BAB) {
    this._builder
      .setNation(babParams.nation)
      .setProfession(babParams.prevProfession)
      .setEducation(
        babParams.eduType,
        babParams.eduStart,
        babParams.eduEnd,
        babParams.eduProfession
      )
      .setJobEducation(
        babParams.jobTitle,
        babParams.jobBegin,
        babParams.jobEnd,
        babParams.jobEduInstitution
      )
      .setTravelCosts(
        babParams.pendel,
        babParams.daysAWeek,
        babParams.transport,
        babParams.start,
        babParams.end,
        babParams.transportCostMonth
      );
    this.buildBafog(babParams.bafog);
  }

  buildBafog(bafogParams: Bafog) {
    this._builder
      .setJobEducation(
        bafogParams.jobTitle,
        bafogParams.jobBegin,
        bafogParams.jobEnd,
        bafogParams.jobEduInstitution
      )
      .setNation(bafogParams.nation)
      .setBank(
        bafogParams.bankUserName,
        bafogParams.bankAddress,
        bafogParams.IBAN,
        bafogParams.BIC,
        bafogParams.bankName
      )
      .setSocialSecurity(bafogParams.healthSecurity, bafogParams.careSecurity)
      .setTax(bafogParams.taxNumber)
      .setParents(
        bafogParams.firstPLastName,
        bafogParams.firstPFirstName,
        bafogParams.firstPBirth,
        bafogParams.firstPSex,
        bafogParams.firstPNation,
        bafogParams.firstPAddress,
        bafogParams.secondPLastName,
        bafogParams.secondPFirstName,
        bafogParams.secondPBirth,
        bafogParams.secondPSex,
        bafogParams.secondPNation,
        bafogParams.secondPAddress
      )
      .setIncome(bafogParams.nettoIncome)
      .setEducation(
        bafogParams.eduType,
        bafogParams.eduStart,
        bafogParams.eduEnd,
        bafogParams.eduProfession
      );
  }
}
