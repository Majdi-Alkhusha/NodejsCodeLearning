var sql = require('../config/db')

var Users = function (fieldItem) {
    this.id = fieldItem.id;
    this.username = fieldItem.username;
    this.password = fieldItem.password;
    this.email = fieldItem.email;
}

//create new field user table
Users.addFieldUser = function (newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function (err, res) {
        if (err) { result(err, null) }
        else {
            result(null, res)
        }
    })
}

Users.getAllUser = function (result) {
    sql.query("select * from users", function (err, res) {
        if (err) { result(err, null) }
        else {
            result(null, res)
        }
    })
}

Users.deleteUserId = function (myArg, result) {
    sql.query("delete from users where id= ?", myArg.id, function (err, res) {
        if (err) { result(err, null) }
        else {
            result(null, res)
        }
    })
}

/* Thx for watching */

module.exports = Users;