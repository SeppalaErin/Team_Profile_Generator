const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
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
    getNumber() {
        return (`Their number is ${this.number}`);
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;