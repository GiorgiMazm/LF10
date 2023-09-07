"use strict";

class Form {
  constructor(
    lastName,
    firstName,
    birth,
    street,
    houseNumber,
    plz,
    city,
    eMail,
    telephone
  ) {
    this.applicant = new Person(lastName, firstName, birth);
    this.street = street;
    this.houseNumber = houseNumber;
    this.plz = plz;
    this.city = city;
    this.eMail = eMail;
    this.telephone = telephone;
  }
}

class Person {
  constructor(lastName, firstName, birth) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birth = birth;
  }
}

class FormBuilder {
  constructor(
    lastName,
    firstName,
    birth,
    street,
    houseNumber,
    plz,
    city,
    eMail,
    telephone
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

  setSex(sex) {
    this.form.sex = sex;
    return this;
  }

  setNation(nationality) {
    this.form.nationality = nationality;
    return this;
  }

  setSocialSupport(socSup) {
    this.form.socSup = socSup;
    return this;
  }

  setWork(workName, workStreet, workNumber, workPlz, workCity) {
    this.form.workName = workName;
    this.form.workStreet = workStreet;
    this.form.workNumber = workNumber;
    this.form.workPlz = workPlz;
    this.form.workCity = workCity;
    return this;
  }

  setOccupation(occupation) {
    this.form.occupation = occupation;
    return this;
  }

  setIncome(income) {
    this.form.income = income;
    return this;
  }

  setAddPers(lastName, firstName, birth) {
    this.form.objAddPers = new Person(lastName, firstName, birth);
    return this;
  }

  setHouse(houseSize, houseType) {
    this.form.houseSize = houseSize;
    this.form.houseType = houseType;
    return this;
  }

  setRent(rent) {
    this.form.rent = rent;
    return rent;
  }

  setBank(name, address, IBAN, BIC, Bankname) {
    this.form.bankName = name;
    this.form.bankAddress = address;
    this.form.bankIBAN = IBAN;
    this.form.bankBIC = BIC;
    this.form.bankBankname = Bankname;
    return this;
  }

  buildForm() {
    return this.form;
  }
}

// Wenn Antrag angeklickt wird: je nach Button wird entsprechender
// Director aufgerufen, der die Blaupause für das Formular ausführt

class FormDirector {
  constructor(lName, fName, birthday, adStreet, adNumber, adPlz, adCity, eMailAdd, telNum){
    this.builder = new FormBuilder(lName, fName, birthday, adStreet, adNumber, adPlz, adCity, eMailAdd, telNum);
  }

  buildWohngeldantrag(nation, sex, socSUp, addPersLName, addPersFName, addPersBirth, hSize, hType, rent, wName, wStreet, wNumber, wPlz, wCity, nIncome, aName, aAddress, IBAN, BIC, bankName) {
    this.builder.setNation(nation).setSex(sex).setSocialSupport(socSup).setAddPers(addPersLName, addPersFName, addPersBirth).setHouse(hSize, hType).setRent(rent);
    this.builder.setWork(wName, wStreet, wNumber, wPlz, wCity).setIncome(nIncome).setBank(aName,aAddress, IBAN, BIC, bankName);
  }
}

//TEST///////////////////////
const director = new FormDirector("Cramer", "Mathis", "16.11.1995", "Emil-Janßen-Straße", "36", "22307", "Hamburg", "mathis.cramer@icloud.com", "123456789")
director.buildWohngeldantrag("deutsch", "m", "no", "Büngener", "Aiyana", "05.04.1999", 50, "flat", 840, "Jungheinrich", "Friedrich-Ebert-Damm", "129", "22870", "Hamburg", 1200, "Mathis Cramer", "Emil-Janßen-Straße", "DE151466538546", "NOLDADE175815", "Sparkasse")
form = director.builder.buildForm

console.log(form)