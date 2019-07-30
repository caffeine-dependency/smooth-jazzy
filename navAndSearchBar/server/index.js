const express = require('express');
const router = require('./router.js');
const morgan = require('morgan');
const port = process.env.PORT || 2001;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
// app.use('/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/', express.static('/Users/erikgrubbs/hackReactor/Arc/Erik-Modules/'));
app.use('/api', router);


app.listen(port, () => console.log(`Listening on ${port}, smooth jazz`));