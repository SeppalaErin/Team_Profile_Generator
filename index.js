// Node Modules
const inquirer = require('inquirer');
let manager;
let engineers = [];
let interns = [];

// Native Modules

const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);

// Personal Modules

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// Function to ask user for information about the Manager
function addManager() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the team manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the team manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of the team manager?"
        },
        {
            type: "input",
            name: "number",
            message: "What is the phone number of the team manager?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "I am done"
            ]
        }
    ])
}

// Function to ask user for information about an Engineer
function addEngineer() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the Engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of the Engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Github of the Engineer?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "I am done"
            ]
        }
    ])
}

// Function to add information about an Intern
function addIntern() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the Intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the Intern?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of the Intern?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the school of the Intern?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "I am done"
            ]
        }
    ])
}

// Generates HTML header and generates card for Manager
function generateManagerHTML(manager) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programming Team</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <link rel="stylesheet" href="src/styles.css">
</head>
<body>
    <header id="background-banner">
        <h1 class="title has-text-white">Programming Team</h1>
    </header>
    <div class = 'managerContainer columns is-centered'>
        
        <div class="card column is-two-thirds profile">
            <header class="card-header">
            <i class="fas fa-chalkboard-teacher"></i> ${manager.getRole()} - ${manager.name} 
            </header>
            <div class="card-content">
                <div class="content">
                    <p>ID: ${manager.id}</p>
                    <p>Email: <a href = "mailto:${manager.email}">${manager.email}</a></p>
                    <p>Office Number: ${manager.number}</p>
                </div>
            </div>
        </div>
    </div>
`;
}

// Generates card elements for each Engineer
function generateEngineersHTML(engineer) {
    return `
    <div class = "engineerColumns columns is-centered">
        ${engineer.map((engineer) => 
        `<div class="card column is-one-fifth profile">
        <header class="card-header">
        <i class="fab fa-js-square"></i> ${engineer.getRole()} - ${engineer.name}
        </header>
        <div class="card-content">
            <div class="content">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href ="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    </div>
        `).join('')}
    </div>
`       
};

// Generates card elements for each Intern
function generateInternsHTML(interns) {
    return `
    <div class = "internColumns columns is-centered">
        ${interns.map((interns) => 
        `<div class="card column is-one-fifth profile">
        <header class="card-header">
        <i class="fas fa-coffee"></i> ${interns.getRole()} - ${interns.name}
        </header>
        <div class="card-content">
            <div class="content">
            <p>ID: ${interns.id}</p>
            <p>Email: <a href = "mailto:${interns.email}">${interns.email}</a></p>
            <p>School : ${interns.school}</p>
        </div>
    </div>
    </div>
        `).join('')}
    </div>
`       

};

// Generates footer to close out the HTML
function generateFooterHTML() {
    return `</main>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
        integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous">
    </script>
    <script src="index.js"></script>
</body>
</html>`

}

// Handles logic for adding engineers or interns or generated HTML
async function handleProgression(answer) {
    if (answer === "Add an Engineer") {
        addEngineer()
            .then(function (answer) {
                let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                engineers.push(engineer)
                handleProgression(answer.progress)
            })
    } else if (answer === "Add an Intern") {
        addIntern()
            .then(function (answer) {
                let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
                interns.push(intern)
                handleProgression(answer.progress);
            })
    } else {
        const managerHTML = generateManagerHTML(manager)
        await appendFileAsync("team.html", managerHTML)
        const engineerHTML = generateEngineersHTML(engineers)
        await appendFileAsync("team.html", engineerHTML)
        const internHTML = generateInternsHTML(interns)
        await appendFileAsync("team.html", internHTML)
        const footerHTML = generateFooterHTML()
        await appendFileAsync("team.html", footerHTML)
    }
}

// Initiates the app on launch and begins inquirer questions
async function init() {
    addManager()
        .then(function (answers) {
            manager = new Manager(answers.name, answers.id, answers.email, answers.number)
            handleProgression(answers.progress)
        })
        .catch(function (err) {
            console.log(err);
        })
}

init();