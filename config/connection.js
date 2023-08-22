const mysql = require('mysql2');
require('dotenv').config();

// Connect to the database using MySQL, utilizing .env file for secure password (also added to .gitignore)
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: process.env.PASSWORD,
    database: 'employee_db'
});

// Confirm connection to the database with a console log in the terminal
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the employee_db database ✔');
});

module.exports = db;
