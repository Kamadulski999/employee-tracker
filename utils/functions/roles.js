const fetch = require('node-fetch')

const getRoles = async () => {
    const response = await fetch('http://localhost:3001/api/roles');
    const data = await response.json();    
    console.table(data);
    }

const createRole = async (promptData) {
    const response = await fetch('/api/roles', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: promptData
    })
    .then(function(res){ return res.json(); })  
    };

module.exports = roleFunctions