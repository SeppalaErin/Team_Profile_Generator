const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getName() {
        return (`Their name is ${this.name}`);
    }
    getId() {
        return (`Their ID is ${this.id}`);
    }
    getEmail() {
        return (`Their Email is ${this.email}`);
    }
    getSchool() {
        return (`Their school is ${this.school}`)
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;