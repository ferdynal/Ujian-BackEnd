const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'backend_movie',
    port : '3306'
})

module.exports = db