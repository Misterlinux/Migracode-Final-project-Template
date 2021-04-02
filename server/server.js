const express = require("express");
var app = express();

const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.post('/mini', (request, response) => {

    if (request) {
        console.log("here we should have the thing " + request.body.name + request.body.password)
        response.json( request.session );
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