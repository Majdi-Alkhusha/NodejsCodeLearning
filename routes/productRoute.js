var express = require("express")
var router = express.Router();
var indexMiddleware = require('../middleware/index')

//HTTP request => we will talk about post and get 
router.get("/getHTTP/:hello/:world", function (req, res) {
    console.log(req.params)
    res.send(req.params)
})

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