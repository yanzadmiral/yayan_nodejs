'use strict';

var express = require('express'); //modul express
var server = express(); 
var logger = require('morgan'); //modul morgan

server.use(logger('dev'));

server.use(express.static(__dirname+'/publik'));

server.listen(4000, function(){
    console.log('Server file sudah berjalan bos!');
});