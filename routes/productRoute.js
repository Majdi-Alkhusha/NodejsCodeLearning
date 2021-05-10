var express = require("express")
var router = express.Router();
var indexMiddleware = require('../middleware/index')

//here when we add :auth before login => will take login as auth route
router.get("/:auth", indexMiddleware.auth, function (req, res) {//here we can add middleware to route
    //if we change auth value => redirect to first route
    //here we must add :auth => but we will test now before add it
    //res.send("Welcome to product router")
    /* Here if you want to render page from view folder */
    /* Send parameter to route from here */
    console.log("result =>", req.requestTime)
    res.render("product/index", { auth: false })
})

module.exports = router