class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
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
    getRole() {
      return "Employee"
    }
  }

  module.exports = Employee;
  