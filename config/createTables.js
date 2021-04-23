var sql = require('./db.js')

require("log-timestamp")

var CreateTable = function (test) {
    console.log("Run function start")
}

CreateTable.createTablesFunction = function (newCreated, result){
    console.log("i will start create")

    var sqlCreateUserTable = "CREATE TABLE IF NOT EXISTS `users` (\
        `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,\
        `username` varchar(200) UNIQUE NOT NULL, \
        `password` varchar(500) NOT NULL,\
        `email` varchar(200) NOT NULL);";

    sql.query(sqlCreateUserTable, function(err, result){
        if(err) throw err;
        console.log("Table created!")
    })
};

module.exports = CreateTable;