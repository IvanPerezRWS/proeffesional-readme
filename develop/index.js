// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "GitHubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What would you like your Project Title to be named?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "Install",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide examples of how your project could be used."
    },
    {
        type: "list",
        name: "License",
        message: "Choose what license you would like to use for your project.",
        choices: [{
            name: "GNU General Public License v3.0",
            },
            {
            name: "MIT License"
            },
            {
            name: "The Unlicense"
            },
            {
            name: "Apache License 2.0"
            }]
    },
    {
        type: "input",
        name: "Contributors",
        message: "How many contributors will there be on your project?",
        validate: validateContributors
    },
    {
        type: "input",
        name: "FAQ1",
        message: "How do you initialize the project?"
    }
];

function validateContributors(num)
{
    var sym = /^\d+$/;
    return sym.test(num) || "Please enter valid numbers.";
}

function promptUser() {
    return inquirer.prompt(questions)
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.error(err);
        }
    });
}



// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to README Generator")
    try {
        const answers = await promptUser();
        const readMe = generateMarkdown(answers, user);
        writeToFile("GeneratedREADME.md", readM);
        console.log("**README file successfully created!**");
    }catch(err) {
        console/log(err);
    }
}

// Function call to initialize app
init();
