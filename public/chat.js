//Make connection 
const socket = io.connect("http://localhost:5000");

//Query DOM 
var message  = document.getElementById('message')
var handle =  document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')
var isTyping = document.getElementById('isTyping')

//Emit events (i.e send message to the server)
btn.addEventListener('click', function(){  //listening to the send button 
    socket.emit('chat', {                  //grab the socket between this client and the server and emit the message and send it to the server
                                          //name of the message will be chat and the data will be message.value, handle.value
        message: message.value,             
        handle: handle.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value)    //name of the message : typing, and data is handle.value i.e name of the client 
})

//Listen for events (i.e handle the message coming from the server)
socket.on('chat', function(data){          // Listening to chat message coming from the server i.e when a message with the name 'chat' comes from the server
    isTyping.innerHTML = ""
    output.innerHTML += '<p><strong>'+ data.handle +':</strong>'+ data.message + '</p>';  //showing message on the output div
})

socket.on('typing', function(data){               //Listen to the typing event i.e when a client is typing then a tping message will come from the server. So this code will listen to that message.
    isTyping.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>'
})