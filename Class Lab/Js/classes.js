// basic objects
const student = {
    "fname": "Blessings",
    "lname": "Chikwapu",
    "gender": "Male",
    "age": 12,
    "class": "Level 12",
    dob: function () {
        return 2025 - this.age;
    },
    fullname: function () {
        return `${this.fname} ${this.lname}`;
    }
}

//console.log(student.dob());


// CLASSES
class Car {
    #fname;
    #lname;
    #price;
    #supplier;

    constructor(firstname, lastname, price, supplier) {
        this.#fname = firstname;
        this.#lname = lastname;
        this.#price = price;
        this.#supplier = supplier;
    }

    get aboutCar() {
        return "W Motors - |EUA Produced only 7 Lykans";
    }

    get price() {
        return this.#price;
    }

    get fullname() {
        return `${this.#fname} ${this.#lname}`;
    }

    get supplier() {
        return this.#supplier;
    }


    getOwner(owner) {
        return `${owner} Owns a ${this.fullname}`;
    }
}

// CLASS INSTANTIATION 
// const car1 = new Car("Lykan", "Hypersport", "$3.4M", "W Motors");
// console.log(car1.supplier);
// let owner = car1.getOwner("EAU National Security");
// console.log(owner);



// OOP INHERITANCE

class SUV extends Car {
    #model;
    #year;
    #quantity;

    constructor(firstname, lastname, price, model, year, quantity) {
        super(firstname, lastname, price);
        this.#model = model;
        this.#year = year;
        this.#quantity = quantity;
    }
}

// const car2 = new SUV("Chevloret", "Surbaban", "$80,000", "Armed", "1995", 12);
// console.log(car2.fname);


// JSON

const user = {
    "firstname": "Scotts",
    "lastname": "Maphumma",
    "address": ["Cape Town", "Georgia", "Durban"],
    "qualifications": ["GSCE", "DJ", "Music Engine"],
    "awards": "SA Got Talent",
    "age": 29,
    "married": false,
    "hobbies": ["Staging"]
}

const vall = JSON.stringify(user);
console.log(vall);

console.log(user);

