"use strict";
var express = require('express');
var http = require('http');
var app = express();
var mustacheExpress = require('mustache-express');

// middlewares
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/resources/views'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));

// Application Routes
var routes = require('./routes')
routes.set(app);

app.listen(3000, function(){
    console.log('http://localhost:3000');
});
