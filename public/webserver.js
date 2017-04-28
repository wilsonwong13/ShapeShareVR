var socket = io(window.location.origin);

socket.on('personalTest', function(data){console.log(data)})
socket.on('message', function(data) {console.log(data)})