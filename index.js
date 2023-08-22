require('dotenv').config();

const db = require('./config/connection.js');
const { displayTitleText } = require('./lib/specialText.js');
const selectTask = require('./lib/selectTask.js');

// handle errors or start application
db.connect(function (err) {
    if (err) throw err;
    init();
});

db.query('SELECT * FROM employee', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
    } else {
        console.log('Employee data:', results);
    }
});

// start application, show title special-text and present task list prompt (using 'selectTask')
function init() {
    displayTitleText();
    selectTask();
};




















