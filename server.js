var express = require('express')
var app = express();

app.use(express.static(__dirname + '/node_modules'))

app.use(express.static(__dirname + '/client'))

app.listen(8000,function(){
    console.log('on port 8000')
})