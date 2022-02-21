const inquirer = require('inquirer');
const Manager = require('./Manager')
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const createTeam = require('../src/createTeam');

const menuPrompts = [
    {
        type:'list',
        message: "Add a team member?",
        choices: ['Manager','Engineer', 'Intern', 'Exit'],
        name: 'menu'
    }
]

const managerPrompts = [
    {
        type: 'input',
        message: 'Enter manager name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter employee ID',
        name: 'ID',
    },
    {
        type: 'input',
        message: 'Enter employee email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter office number',
        name: 'officeNumber',
    },
]

const engineerPrompts = [
    {
        type: 'input',
        message: 'Enter engineer name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter employee ID',
        name: 'ID',
    },
    {
        type: 'input',
        message: 'Enter employee email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter engineer github',
        name: 'github',
    },
]

const internPrompts = [
    {
        type: 'input',
        message: 'Enter intern name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter employee ID',
        name: 'ID',
    },
    {
        type: 'input',
        message: 'Enter employee email',
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter intern's school",
        name: 'school',
    },
]

class Team {
    
    constructor() {
        this.team = [];
    }

    initTeam() {
        inquirer.prompt(menuPrompts)
        .then((answers) => {
            switch(answers.menu) {
                case "Manager":
                    this.managerPrompts();
                break;
                case "Engineer":
                    this.engineerPrompts();
                break;
                case "Intern":
                    this.internPrompts();
                break;
                case "Exit":
                    createTeam(this.team);
                break;
            }
        })
    }

     managerPrompts() {
        inquirer.prompt(managerPrompts)
        .then ((answers) => {
            const {name, ID, email, officeNumber} = answers;
            this.team.push(new Manager (name, ID, email, officeNumber));
            console.log(this.team)
            this.initTeam();
        })
    }
    engineerPrompts() {
        inquirer.prompt(engineerPrompts)
        .then ((answers) => {
            const {name, ID, email, github} = answers;
            this.team.push(new Engineer (name, ID, email, github));
            console.log(this.team)
            this.initTeam();
        })
    }
    internPrompts() {
        inquirer.prompt(internPrompts)
        .then ((answers) => {
            const {name, ID, email, school} = answers;
            this.team.push(new Intern (name, ID, email, school));
            console.log(this.team)
            this.initTeam();
        })
    }
}

module.exports = Team;