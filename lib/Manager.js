// Require the Employee;
const Employee = require("./Employee");

// Create Manager;
class Manager extends Employee {
    constructor(name, pronouns, email, workPhone) {
        super(name, pronouns, email)
        this.workPhone = "("+workPhone.substring(0,3)+")"+workPhone.substring(3,6)+"-"+workPhone.substring(6,11);
    }
    //  Return office number;
    getWorkPhone() {
        return this.workPhone;
    }
    //  Return employee role;
    getRole() {
        return "Manager";
    }
}

// export manager
module.exports = Manager;