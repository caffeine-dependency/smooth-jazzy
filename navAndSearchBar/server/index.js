// require('newrelic');
var express = require('express');
var router = require('./router.js');
var app = express();
// const morgan = require('morgan'); app.use(morgan('dev'));
var port = process.env.PORT || 2001;

app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);

app.listen(port, function () { return console.log("Listening on " + port + ", smooth jazz"); });