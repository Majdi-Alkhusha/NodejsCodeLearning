/* Middleware functions */
//add to request (Time)
var requestTime = function (req, res, next) {
    console.log("inside middleware")
    req.requestTime = Date.now();
    next();//next route 
}

//if we need add auth to route => if true => next to render page => if not => redirect to home page (first route)
var auth = function (req, res, next) {
    if (req.params.auth == 'admin') {
        console.log('welcome admin')
        next()
    } else {
        console.log("not auth")
        res.redirect('/')
    }
}


module.exports = {
    requestTime: requestTime,
    auth: auth
}