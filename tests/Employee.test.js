const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe('Initialization', () => {
        it("should initialize name, id, and email property with name, id, and email parameter", () => {
            // Arrange
            let testName = "Sally";
            let testId = "10"
            let testEmail = "smonagha@conncoll.edu"
            // Act
            const testEmployee = new Employee(testName, testId, testEmail);

            // Assert
            expect (testEmployee.name).toBe(testName);
            expect(testEmployee.id).toBe(testId);
            expect(testEmployee.email).toBe(testEmail);
        });
    })
    describe('get Role', () => {
        it("should get the role of the employee: Employee", () => {
            // Arrange
            let testRole = "Employee"
            
            // Act
            const testEmployee = new Employee();

            // Assert
            expect (testEmployee.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("should get the name of the employee: Stan", () => {
            // Arrange
            let testName = "Their name is Stan"
            
            // Act
            const testEmployee = new Employee("Stan", 10, "stantheman@gmail.com");

            // Assert
            expect (testEmployee.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("should get the id of the employee: 10", () => {
            // Arrange
            let testId = "Their ID is 10"
            
            // Act
            const testEmployee = new Employee("Stan", 10, "stantheman@gmail.com");

            // Assert
            expect (testEmployee.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should get the email of the employee: 10", () => {
            // Arrange
            let testEmail = "Their Email is stantheman@gmail.com"
            
            // Act
            const testEmployee = new Employee("Stan", 10, "stantheman@gmail.com");

            // Assert
            expect (testEmployee.getEmail()).toBe(testEmail);
        });
    })
})