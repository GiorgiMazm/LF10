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
      .setAddPers()
      .setHouse(wohngeldParams.houseSize, wohngeldParams.houseType)
      .setRent(wohngeldParams.rent);
    this._builder.setWork().setIncome(wohngeldParams.nettoIncome).setBank();
    this.buildBABAntrag(wohngeldParams.bab);
  }

  buildBABAntrag(babParams: BAB) {
    this._builder
      .setNation(babParams.nation)
      .setProfession(babParams.prevProfession)
      .setEducation()
      .setJobEducation()
      .setTravelCosts();
    this.buildBafog(babParams.bafog);
  }

  buildBafog(bafogParams: Bafog) {
    this._builder
      .setJobEducation()
      .setNation(bafogParams.nation)
      .setBank()
      .setSocialSecurity()
      .setTax(bafogParams.taxNumber)
      .setParents()
      .setIncome(bafogParams.nettoIncome)
      .setEducation();
  }
}
