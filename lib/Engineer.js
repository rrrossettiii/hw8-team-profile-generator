// Require the employee.js
const Employee = require("./Employee");

// Create Engineer;
class Engineer extends Employee {
    constructor(name, pronouns, email, usernameGH) {
        super(name, pronouns, email)
        this.usernameGH = usernameGH;
    }

    // Return usernameGH Username;
    getUsernameGH() {
        return this.usernameGH;
    }
    // Return Employee role;
    getRole() {
        return "Engineer";
    }
}


// Export Engineer;
module.exports = Engineer;