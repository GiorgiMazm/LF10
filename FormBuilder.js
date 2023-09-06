"use strict"

class Form {
    constructor(applicant, street, houseNumber, plz, city, eMail, telephone) {
        this.applicant = new Person
        this.street = street,
        this.houseNumber = houseNumber,
        this.plz = plz,
        this.city = city
        this.eMail = eMail,
        this.telephone = telephone
    }
}

class Person {
    constructor(lastName, firstName, birth) {
        this.lastName = lastName,
        this.firstName = firstName,
        this.birth = birth
    }
}

class FormBuilder {
    constructor(lastName, firstName, birth, street, houseNumber, plz, city, eMail, telephone) {
        this.form = new Form(lastName, firstName, birth, street, houseNumber, plz, city, eMail, telephone) 
    }

    setSex(sex) {
        this.form.sex = sex
        return this
    }

    setNation(nationality) {
        this.form.nationality = nationality
        return this
    }

    setSocialSupport(socSup) {
        this.form.socSup = socSup
        return this
    }

    setWork(workName, workStreet, workNumber, workPlz, workCity) {
        this.form.workName = workName,
        this.form.workStreet = workStreet,
        this.form.workNumber = workNumber,
        this.form.workPlz = workPlz,
        this.form.workCity = workCity
        return this
    }

    setOccupation(occupation) {
        this.form.occupation = occupation
        return this
    }

    setIncome(income) {
        this.form.income = income
        return this
    }

    setAddPers(lastName, firstName, birth) {
        this.form.objAddPers = new Person(lastName, firstName, birth)
        return this
    }

    setHouse(houseSize, houseType) {
        this.form.houseSize = houseSize,
        this.form.houseType = houseType
        return this
    }

    setRent(rent) {
        this.form.rent = rent
        return rent
    }

    setBank(name, address, IBAN, BIC, Bankname) {
        this.form.bankName = name,
        this.form.bankAddress = address,
        this.form.bankIBAN = IBAN,
        this.form.bankBIC = BIC,
        this.form.bankBankname = Bankname
        return this
    }
}

// Wenn Antrag angeklickt wird: je nach Button wird entsprechender 
// Director aufgerufen, der die Blaupause für das Formular ausführt