const Employee = require("../lib/Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
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
    getGithub() {
        return (`Their github username is ${this.github}`)
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;