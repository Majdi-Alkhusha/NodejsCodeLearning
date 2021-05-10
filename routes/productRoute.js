var express = require("express")
var router = express.Router();
var indexMiddleware = require('../middleware/index')
var UserModel = require("../models/users")

//route to create new field in database
router.post('/userTable', function (req, res) {
    UserModel.addFieldUser(req.body, function (err, fullResponse) {
        if (err) console.log("err=>", err)
        res.send("Done!")
    })
})

//get all field in user table
router.get('/getUserTable', function (req, res) {
    UserModel.getAllUser(function (err, fullResponse) {
        if (err) console.log("err", err)
        res.send(fullResponse)
    })
})

//delete field in user table
router.get('/deleteUserTable/:id', function (req, res) {
    UserModel.deleteUserId({ id: req.params.id }, function (err, fullResponse) {
        if (err) console.log("err", err)
        res.send(fullResponse)
    })
})

/* thx for watching */

//HTTP request => we will talk about post and get 
/* but we can't use post like this  */
router.post("/postHTTP", function (req, res) {
    console.log(req.body)/* Here we will use body=> for post */
    res.send(req.body)/* in this case response will be undefined */
    /* to solve this problem we will use body parser */
})

router.get("/:auth", indexMiddleware.auth, function (req, res) {//here we can add middleware to route
    //if we change auth value => redirect to first route
    //here we must add :auth => but we will test now before add it
    //res.send("Welcome to product router")
    /* Here if you want to render page from view folder */
    /* Send parameter to route from here */
    console.log("result =>", req.requestTime)
    res.render("product/index", { auth: false })
})

/* Thx for watching */

module.exports = router