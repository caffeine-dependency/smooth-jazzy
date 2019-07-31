const express = require('express');
const router = require('./router.js');
const app = express();
// const morgan = require('morgan'); app.use(morgan('dev'));
const port = process.env.PORT || 2001;
const compression = require('compression');


app.use(compression());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/api', router);


app.listen(port, () => console.log(`Listening on ${port}, smooth jazz`));