
var express = require('express');
var path = require('path');
var app = express();
var publicStaticFolder = path.join(__dirname, 'public');

app.use(express.static(publicStaticFolder));
app.use(express.logger('dev'));

app.listen(process.env.PORT);
