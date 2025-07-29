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

    get price() {
        return this.#price;
    }

    get fullname() {
        return `${this.#fname}  ${this.#lname}`;
    }

    get supplier() {
        return this.#supplier;
    }
}


const car1 = new Car("Lykan", "Hypersport", "$3.4M", "W Motors");
console.log(car1.supplier);
