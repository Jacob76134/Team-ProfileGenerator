const createRole = (employee) => {
    switch (employee.getRole()) {
    case "Manager": 
        return `Office Number: ${employee.officeNum}`;
    break;
    case "Engineer": 
        return `Github: <a target="_blank" href=https://github.com/${employee.github}>${employee.github}</a>`;
    break;
    case "Intern": 
        return `School: ${employee.school}`
    break;
    }
}

module.exports = createRole;