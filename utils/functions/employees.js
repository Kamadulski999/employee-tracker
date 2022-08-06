const fetch = require('node-fetch')


const getEmployees = async () => {
    const response = await fetch('http://localhost:3001/api/employees');
    const data = await response.json();    
    console.table(data);
    }

const getEmployee = async (userId) => {
    const response = await fetch(`http://localhost:3001/api/employees/${userId}`);
    const data = await response.json();    
    console.table(data);
    }

const createEmployee = async (promptData) {
    const response = await fetch('/api/users/employees', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: promptData
  })
  .then(function(res){ return res.json(); })  
};

const updateEmployee = async (promptData) => {
  const response = await fetch('/api/employees/:id', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: promptData
  })
  .then(function(res){ return res.json(); })  
};

   

module.exports = { getEmployees, getEmployee, createEmployee, updateEmployee }