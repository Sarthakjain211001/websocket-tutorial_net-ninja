//Make connection 
const socket = io.connect("http://localhost:5000");

//Query DOM 
var message  = document.getElementById('message')
var handle =  document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')

//Emit events 
btn.addEventListener('click', function(){  //listening to the send button 
    socket.emit('chat', {                  //grab the socket between this client and the server and emit the message and send it to the server
        message: message.value, 
        handle: handle.value
    });
});

//Listen for events 
socket.on('chat', function(data){          // Listening to chat message coming from the server
    output.innerHTML += '<p><strong>'+ data.handle +':</strong>'+ data.message + '</p>';  //showing message on the output div
})