var socket = io();

socket.on('connectToRoom',function(data) {
  console.log('Incoming message:', data);
});
