const fetch = require('node-fetch');
const cTable = require('console.table');

const getRoles = async (answer) => {
    const response = await fetch('http://localhost:3001/api/roles');
    const data = await response.json(); 
    console.table(data.data);
    }

const addRole = async (promptData) => {
    const response = await fetch('http://localhost:3001/api/roles', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promptData)
    })
    .then(function(res){ return res.json(); })  
    };

module.exports = { getRoles, addRole }