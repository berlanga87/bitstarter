var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var app = express.createServer(express.logger());
var buf2 = new Buffer(fs.readFileSync("./index.html"));
app.get('/', function(request, response) {
  response.send(buf2.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
