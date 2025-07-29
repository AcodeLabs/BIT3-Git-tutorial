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

console.log(student.dob());
