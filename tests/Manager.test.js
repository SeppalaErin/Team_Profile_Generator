const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe('Initialization', () => {
        it("should initialize name, id, and email property with name, id, and email parameter", () => {
            // Arrange
            let testName = "Sally";
            let testId = "10"
            let testEmail = "smonagha@conncoll.edu"
            let testNumber = "101"
            // Act
            const testManager = new Manager(testName, testId, testEmail, testNumber);

            // Assert
            expect (testManager.name).toBe(testName);
            expect(testManager.id).toBe(testId);
            expect(testManager.email).toBe(testEmail);
            expect(testManager.number).toBe(testNumber);
        });
    })
    describe('get Role', () => {
        it("should get the role of the Manager: Manager", () => {
            // Arrange
            let testRole = "Manager"
            
            // Act
            const testManager = new Manager();

            // 
            expect (testManager.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("should get the name of the Manager: Sally", () => {
            // Arrange
            let testName = "Their name is Sally"
            
            // Act
            const testManager = new Manager("Sally", 10, "Sallythewoman@gmail.com");

            // Assert
            expect (testManager.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("should get the id of the Manager: 10", () => {
            // Arrange
            let testId = "Their ID is 10"
            
            // Act
            const testManager = new Manager("Sally", 10, "Sallythewoman@gmail.com");

            // Assert
            expect (testManager.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should get the email of the Manager: Sallythewoman@gmail.com", () => {
            // Arrange
            let testEmail = "Their Email is Sallythewoman@gmail.com"
            
            // Act
            const testManager = new Manager("Sally", 10, "Sallythewoman@gmail.com");

            // Assert
            expect (testManager.getEmail()).toBe(testEmail);
        });
    })
    describe('get number', () => {
        it("should get the number of the Manager: 123456789", () => {
            // Arrange
            let testNumber = "Their number is 123456789"
            
            // Act
            const testManager = new Manager("Sally", 10, "Sallythewoman@gmail.com", 123456789);

            // Assert
            expect (testManager.getNumber()).toBe(testNumber);
        });
    })
})