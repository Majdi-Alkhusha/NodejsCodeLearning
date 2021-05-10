const express = require('express')
const CreateTable = require("./config/createTables")
//Here init express
const app = express();
const path = require("path")
const productRouter = require("./routes/productRoute")
var indexMiddleware = require('./middleware/index')
// Run my app on my port
const port = 3000
//create my first route
app.get('/', indexMiddleware.auth, (req, res) => {
    res.send("Home page of admin")// for example
})

//in this video we will learn more about route


app.use(express.static(__dirname + "/public"));/* Connect to public folder */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'))
/* For test we will call create table from here */
CreateTable.createTablesFunction()
app.use("/product", productRouter)
//Listen on your port here
app.listen(port, () => {
    console.log(`Code learning app on port ${port}`)
})

/* Now you can generate your application skeletonauto using express generator

npx express generator => in terminal
But in this tutorial we will do it manual

*/

/* Thanks for watching */
/* We will learn more about skeleton in next video  */