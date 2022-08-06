const inquirer = require('inquirer')


const initialPrompt = answer => {   
    return inquirer.prompt([
        {
            type: 'list',
            message: "Welcome to the Employee Tracker App! How would like to Proceed?",
            name: 'initialList',                
            choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        }
    ])
};

const addDeptPrompt = answer => {
           return inquirer.prompt(
            {
                type: 'input',
                name: 'name',
                message: "What is the name of the department?",
                validate: nameInput => {
                    if (nameInput) {
                    return true;
                    } else {
                    console.log('Please enter a department name!');
                    return false;
                    }
                }
            },
        )};

const addRolePrompt = answer => {
        return inquirer.prompt(
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the role?",
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter a name for the role!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary for this role?",            
            validate: (salaryInput) => {
            salaryInput = salaryInput || 0;  
                if (salaryInput > 0) {
                return true;                            
                } else {    
                console.log('Please enter an valid salary!');    
                return false;    
            
                }
            }
        },      
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the role?",
            validate: roleInput => {
                if (roleInput) {
                return true;
                } else {
                console.log('Please enter a name for the role!');
                return false;
                }
            }
        },
    )};


    const addEmplyeePrompt = answer => {
        return inquirer.prompt(
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?",
            validate: firstInput => {
                if (firstInput) {
                return true;
                } else {
                console.log('Please enter the first name!');
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?",
            validate: lastInput => {
                if (lastInput) {
                return true;
                } else {
                console.log('Please enter the last name!');
                return false;
                }
            }
        },      
        {
            type: 'input',
            name: 'role',
            message: "What is the employees role?",
            validate: roleInput => {
                if (roleInput) {
                return true;
                } else {
                console.log('Please enter a role!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the employee's manager?",
            validate: managerInput => {
                if (managerInput) {
                return true;
                } else {
                console.log('Please enter a manager name');
                return false;
                }
            }
        },
    )};
