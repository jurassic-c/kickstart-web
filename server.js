var express = require('express');
var app = express();

app.use(require('connect-livereload')({
  port: 35729
}));
app.use(express.static('build'));

var server = app.listen(3030, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Server is listening at http://%s:%s", host, port);
});