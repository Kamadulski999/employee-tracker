const fetch = require('node-fetch')

const getDepts = async () => {
    const response = await fetch('http://localhost:3001/api/departments');
    const data = await response.json();    
    console.table(data);
    }

const addDept = async (promptData) => { 
    const response = await fetch('http://localhost:3001/api/departments', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promptData)
    })
    .then(function(res){ return res.json(); })  
    };

module.exports = { getDepts, addDept }