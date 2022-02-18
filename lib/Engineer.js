const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) 
  {
    super(name, id, email);
    this.github = github;

  }
  getRole() {
    return "Engineer";
  }
  getGitName() {
      return this.github;
  }
}
module.exports = Engineer;