// require('newrelic');
var express = require('express');
var router = require('./router.js');
var app = express();
var port = process.env.PORT || 2001;

app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);

app.listen(port, function () { return console.log("Listening on " + port + ", smooth jazz"); });