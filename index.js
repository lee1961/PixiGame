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
var player_1 = "player1";
var socket_1;
var socket_2;
var player_2 = "player2";
io.on('connection',function(socket) {
    count++;
    socket.emit('uniqueID',count);

    console.log("A user has connected ");

    socket.on('connect', function(data) {
        //socket.emit('success',"successfull")
        //console.log(data);

        console.log("roger that");
    });

    socket.on('givenSocketID',function(data) {
        //console.log("the socketID of the client is" + data.socketID);
        if(count == 1) {
            socket_1 = data.socketID;
            socket.emit('givenID',player_1);
        } else if (count == 2) {
            socket_2 = data.socketID;
            socket.emit('givenID',player_2);
        }

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
        count--;
        console.log("a user has disconnected");
    });


    socket.on('up_press', function(data) {
        sock = data;

    });

});



http.listen(3000, function() {
    console.log("listening on port 3000");
});
