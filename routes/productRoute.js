var express = require("express")
var router = express.Router();

router.get("/", function (req, res) {
    //res.send("Welcome to product router")
    /* Here if you want to render page from view folder */
    /* Send parameter to route from here */
    res.render("product/index", { auth: false })
})

module.exports = router