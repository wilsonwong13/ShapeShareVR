const express = require('express')
const app = express()
var server = app.listen(process.env.PORT)
var socketio = require('socket.io')
var io = socketio(server);

app.use(express.static('public'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html')
});


io.on('connection', function(socket) {
	console.log('A user connected')

	socket.on('broadcast', function (data) {
    socket.broadcast.emit('broadcast', data);
  });

	socket.on('disconnect', function() {
		console.log('A user disconnect')
	})
})

