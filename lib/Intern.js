// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Require the Employee.js
const Employee = require("./Employee");
// Create Intern;
class Intern extends Employee {
    constructor(name, pronouns, email, school) {
        super(name, pronouns, email)
        this.school = school
    }

    getSchool() {
        return this.school;
    }
    // Return the role;
    getRole() {
        return "Intern";
    }
}

// Export Intern;
module.exports = Intern;