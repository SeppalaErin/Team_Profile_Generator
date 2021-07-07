const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe('Initialization', () => {
        it("should initialize name, id, and email property with name, id, and email parameter", () => {
            // Arrange
            let testName = "Sarah";
            let testId = 98
            let testEmail = "Sarahthewoman@gmail.com"
            let testSchool = "Uconn"
            // Act
            const testIntern = new Intern(testName, testId, testEmail, testSchool);

            // Assert
            expect (testIntern.name).toBe(testName);
            expect(testIntern.id).toBe(testId);
            expect(testIntern.email).toBe(testEmail);
            expect(testIntern.school).toBe(testSchool);
        });
    })
    describe('get Role', () => {
        it("should get the role of the Intern: Intern", () => {
            // Arrange
            let testRole = "Intern"
            
            // Act
            const testIntern = new Intern("Sarah", 98, "Sarahthewoman@gmail.com", "Uconn");

            // 
            expect (testIntern.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("should get the name of the Intern: Sarah", () => {
            // Arrange
            let testName = "Their name is Sarah"
            
            // Act
            const testIntern = new Intern("Sarah", 98, "Sarahthewoman@gmail.com", "Uconn");

            // Assert
            expect (testIntern.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("should get the id of the Intern: 98", () => {
            // Arrange
            let testId = "Their ID is 98"
            
            // Act
            const testIntern = new Intern("Sarah", 98, "Sarahthewoman@gmail.com", "Uconn");

            // Assert
            expect (testIntern.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should get the email of the Intern: Sarahthewowoman@gmail.com", () => {
            // Arrange
            let testEmail = "Their Email is Sarahthewoman@gmail.com"
            
            // Act
            const testIntern = new Intern("Sarah", 98, "Sarahthewoman@gmail.com", "Uconn");

            // Assert
            expect (testIntern.getEmail()).toBe(testEmail);
        });
    })
    describe('get School', () => {
        it("should get the school name of the Intern: Uconn", () => {
            // Arrange
            let testSchool = "Their school is Uconn"
            
            // Act
            const testIntern = new Intern("Sarah", 98, "Sarahthewoman@gmail.com", "Uconn");

            // Assert
            expect (testIntern.getSchool()).toBe(testSchool);
        });
    })
})