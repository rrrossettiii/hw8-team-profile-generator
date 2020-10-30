// Create Employee; 
class Employee {
    constructor(name, pronouns, email) {
        // assign name;
        this.name = name;
        // assign pronouns;
        this.pronouns = pronouns;
        // assign email;
        this.email = email;
    }
    // Return name;
    getName() {
        return this.name
    }
    // Return pronouns;
    getpronouns() {
        return this.pronouns;
    }
    // Return email address;
    getEmail() {
        return this.email;
    }
    // Return role;
    getRole() {
        return "Employee"
    }
}

// Export Employee;
module.exports = Employee;
