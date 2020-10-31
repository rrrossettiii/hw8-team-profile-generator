const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// and to create objects for each team member (using the correct classes as blueprints!)

// Inquirer Prompts;
const promptQuestions = [
    // -- Name?;
    {
        type: 'input',
        name: 'name',
        message: 'Enter your Name: ',
        validate: employeeName => {
            if (employeeName.length < 1){
                return 'A valid name is required to proceed.';
            }
        return true;}
    },
    // -- Pronouns?;
    {
        type: 'checkbox',
        name: 'pronouns',
        message: 'Select (all) pronouns you prefer: ',
        choices: ['They/them', 'She/her', 'He/him'],
        validate: response => {
            if(response.length < 1){
                return 'Please select at least one.';
            }
        return true;
        }
    },
    // -- Email?;
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email: ',
        // - email includes '@' and '.com';
        validate: employeeEmail => {
            if (!employeeEmail.includes('@') && !employeeEmail.includes('.com')){
                return 'A valid email is required to proceed.';
            }
        return true;}
    },
    // -- Role?;
    {
        type: 'list',
        name: 'role',
        message: 'Select your role: ',
        choices: ['Intern', 'Engineer', 'Manager']
    },
]

// Per-Role Questions;
async function specialQuestions(employeeInfo){
    // -- Intern;
    if (employeeInfo.role == 'Intern'){
        // --- School?;
        const specialInfo = await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'Enter your school: ',
            validate: response => {
                if (response.length < 1){
                    return 'Please enter valid school.';
                }
                return true;
            }
        })
        return specialInfo;
    } 
    // -- Engineer;
    else if (employeeInfo.role == 'Engineer'){
        // --- GitHub Username?;
        const specialInfo = await inquirer.prompt({
            type: 'input',
            name: 'usernameGH',
            message: 'Enter your GitHub username: ',
            // -- aesthetic fun!;
            transformer: function(a,b) {
                return `${'@' + a}`
            },
            validate: response => {
                if (response.length < 1){
                    return 'Please enter a valid username.';
                }
                return true;
            }
        })
        return specialInfo;
    }
    // -- Manager;
    else if (employeeInfo.role == 'Manager'){
        // --- Work Telephone?;
        const specialInfo = await inquirer.prompt({
            type: 'input',
            name: 'workPhone',
            message: 'Enter work phone number: ',
            // -- this shows the user the output (formatted) string as we wil use it;
            transformer: (input) => {
                    const areaCode = input.substring(0,3);
                    const middle = input.substring(3,6);
                    const last = input.substring(6);

                    if(input.length > 10){return 'TOO LONG'}
                    else if(input.length > 6){return `(${areaCode}) ${middle}-${last}`;}
                    else if(input.length > 3){return `(${areaCode}) ${middle}`;}
                    else if(input.length > 0){return `(${areaCode})`;}
                    else {return input};
            },
            validate: response => {
                // -- this ensures the string is only numbers and 10 digits long;
                if (isNaN(response) || response.length != 10){
                    return 'Please enter valid phone number.';
                }
                return true;
            }
        })
        return specialInfo;
    }
}

// The Main Function;
async function addEmployee() {
    // - runs main questions;
    const employeeInfo = await inquirer.prompt(promptQuestions)
    // - welcomes role; runs the per-role questions; then appends their response to 'employeeInfo';
    console.log(`\nWelcome ${employeeInfo.role}`);
    const specialInfo = await specialQuestions(employeeInfo)
    Object.assign(employeeInfo, specialInfo);
    console.log('\n\n+Success, employee added+\n\n');
    // console.log(employeeInfo);
}

// Start the Main Function;
addEmployee();


