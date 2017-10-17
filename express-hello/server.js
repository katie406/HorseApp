var express = require('express');
var path = require('path');
var app = express();

app.set('port',5000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');

});

app.listen(app.get('port'), function() {
console.log('Web Server is running at port' + app.get('port'));
});

