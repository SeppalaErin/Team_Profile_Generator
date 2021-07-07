const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe('Initialization', () => {
        it("should initialize name, id, and email property with name, id, and email parameter", () => {
            // Arrange
            let testName = "Paul";
            let testId = 42
            let testEmail = "Paultheman@gmail.com"
            let testGithub = "paulgithub"
            // Act
            const testEngineer = new Engineer(testName, testId, testEmail, testGithub);

            // Assert
            expect (testEngineer.name).toBe(testName);
            expect(testEngineer.id).toBe(testId);
            expect(testEngineer.email).toBe(testEmail);
            expect(testEngineer.github).toBe(testGithub);
        });
    })
    describe('get Role', () => {
        it("should get the role of the Engineer: Engineer", () => {
            // Arrange
            let testRole = "Engineer"
            
            // Act
            const testEngineer = new Engineer("Paul", 42, "Paultheman@gmail.com", "paulgithub");

            // 
            expect (testEngineer.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("should get the name of the Engineer: Paul", () => {
            // Arrange
            let testName = "Their name is Paul"
            
            // Act
            const testEngineer = new Engineer("Paul", 42, "Paultheman@gmail.com", "paulgithub");

            // Assert
            expect (testEngineer.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("should get the id of the Engineer: 42", () => {
            // Arrange
            let testId = "Their ID is 42"
            
            // Act
            const testEngineer = new Engineer("Paul", 42, "Paultheman@gmail.com", "paulgithub");

            // Assert
            expect (testEngineer.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should get the email of the Engineer: Paultheman@gmail.com", () => {
            // Arrange
            let testEmail = "Their Email is Paultheman@gmail.com"
            
            // Act
            const testEngineer = new Engineer("Paul", 42, "Paultheman@gmail.com", "paulgithub");

            // Assert
            expect (testEngineer.getEmail()).toBe(testEmail);
        });
    })
    describe('get github', () => {
        it("should get the github name of the Engineer: paulgithub", () => {
            // Arrange
            let testGithub = "Their github username is paulgithub"
            
            // Act
            const testEngineer = new Engineer("Paul", 42, "Paultheman@gmail.com", "paulgithub");

            // Assert
            expect (testEngineer.getGithub()).toBe(testGithub);
        });
    })
})