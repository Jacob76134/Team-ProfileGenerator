const createRole = require('./createRole');

const createCard = (employee) => {
    return `
    <div class="card">
        <div class="cardContent">
            <div class="cardHead">
                <h2>${employee.name}</h2>
            </div>
                <a class="cardId">ID: ${employee.id}</a>
                <a class="cardEmail">Email: ${employee.email}</a>
                <div class="employeeInfo">
                    ${createRole(employee)}
                </div>
            </div>
        </div>
    </div>
    `
}

module.exports = createCard