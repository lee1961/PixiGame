var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res) {
  //res.sendFile(__dirname + '/index.html');
  res.render('/index.html');
});

io.on('connection',function(socket) {
  console.log("A user has connected");

  socket.on('disconnect',function() {
    console.log("a user has disconnected");
  });

});



http.listen(3000, function() {
  console.log("listening on port 3000");
});
