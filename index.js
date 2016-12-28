var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res) {
  //res.sendFile(__dirname + '/index.html');
  res.render('/index.html');
});
var count = 0;
io.on('connection',function(socket) {
  console.log("A user has connectedbbb  ");

  socket.on('connect', function(data) {
    //socket.emit('success',"successfull")
    //console.log(data);
    console.log("roger that");
  });
  socket.on('clientEvent', function(data) {
    //socket.emit('success',"successfull")
    //console.log(data);
    console.log("roger that");
  });
  socket.on('success',function(data) {
    console.log("hey");
  });

  socket.on('disconnect',function() {
    console.log("a user has disconnected");
  });

});



http.listen(3000, function() {
  console.log("listening on port 3000");
});
