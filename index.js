const express = require('express');
const socket = require('socket.io');

//App setup 
const app = express();
const server = app.listen(5000, function(){
    console.log('App listening on port 5000')
});

//Static files
app.use(express.static('public'));   //This will serve index.html file from the public folder to browser.

//Socket setup 
var io = socket(server)  //server because we want socket.io to work on this server which we created above.

io.on('connection', function(socket){      //listening for an event
    console.log('made socket connection')
})               