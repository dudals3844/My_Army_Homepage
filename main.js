var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname,'html')));

app.listen(3000, function(){
    console.log('Server On!');
});