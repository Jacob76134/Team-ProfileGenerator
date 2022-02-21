const Employee = require('./Employee.js');

class Manager extends Employee {

    constructor(name, id, email, officeNum, role) 
    {
        super(name, id, email);
        
        this.role = 'Manager';
        this.officeNum = officeNum;
      }
      getOffice() {
        return this.officeNum;
      }
      getRole() {
        return "Manager";
      }
    }
    module.exports = Manager;