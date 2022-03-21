/* passport.js */

export default class Passport {
    /**
     * @param {string} firstName
     * @param {string} lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    getFirstName() {
        return this.firstName.toLowerCase();
    };

    getLastName() {
        return this.lastName.toUpperCase();
    };

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getInitials() {
        return `${this.firstName[0].toUpperCase()}${"."}${this.lastName[0].toUpperCase()}${"."}`;
    };

    getIsValidName() {
        if(this.firstName.length >= 1 && this.lastName.length >= 1 && this.lastName[this.lastName.length - 1] !== '.') {
            return "Yes";
        } else {
            return "No";
        };   
    };
};