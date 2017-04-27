const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html')
});

var server = app.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

var socketio = require('socket.io')

var io = socketio(server);

io.on('connection', function(socket) {
	console.log('A user connected')

	socket.on('disconnect', function() {
		console.log('A user disconnect')
	})
})