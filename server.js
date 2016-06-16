function console_log(s) {
        console.log(new Date().toString()+" "+s);
}
var io = require('socket.io-client');
var socket = io.connect("https://event.staging.demio.com:3000");

socket.on('connect', function () {
   console_log(socket.id);
   console_log('socket.io_connected');
socket.emit('kurentoServerPing');
});
socket.on('kurentoServerPong', function () {
       console_log("socket.io_id"+socket.id+" sent pong");
});
setInterval(function() { socket.emit('kurentoServerPing'); console_log("sent ping"); }, 1000);

socket.on('disconnect', function () {
   console_log('disconnected_socket.io');
});

socket.on('endWebinarForRecording', function(webinarId) {
       console_log("webinar_ended "+webinarId);
});

