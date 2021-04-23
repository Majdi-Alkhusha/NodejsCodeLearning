/* Database connection */
var mysql = require('mysql');
const dotenv = require('dotenv').config()//sorry about this!
var util = require('util');

var connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    multipleStatements: true
})
/* Thanks for watching! */
/* Of course the skeletons will be different in implement code => like use helper => CRUD what ever!

but in this tutorial we are use this simple skeletons for test 

Thanks for watching again
*/
connection.getConnection((err, connection) => {
    if (err) {
        //status
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("Database connection was closed")
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
            console.log("Database connection was refused")
        }
    }
    if (connection) connection.release();
    return
})

connection.query = util.promisify(connection.query)
/* Now we will test config */
module.exports = connection