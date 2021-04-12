const express = require("express");
var app = express();

const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const session = require('express-session');
const { response } = require("express");
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});

app.get("/test", (request, response) => {
    console.log("this is working")
    response.send( "ok so, maybe we will see ")
})

app.post('/mini', (request, response) => {

    if (request) {
        console.log("here we should have the thing " + request.body.name + request.body.password)
        response.json( request.sessionID );
    } else {
        console.log("ok so, the redirect works BUT")
        response.send('Please login to view this page!');
    }
    response.end();
});

var port = 5000;
app.listen(port, () => 
    console.log(`SERVER LISTENING IN PORT : ${port}`)
);