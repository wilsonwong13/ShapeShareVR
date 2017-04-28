const express = require('express')
const app = express()
var server = app.listen(process.env.PORT)
var socketio = require('socket.io')
var io = socketio(server);

app.use(express.static('public'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html')
});

app.get('/ar', function(req, res, next) {
	res.sendFile(__dirname + '/public/aframeAR.html')
});


io.on('connection', function(socket) {
	console.log('A user connected')

	setTimeout(function(){
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);

	
	socket.on('disconnect', function() {
		console.log('A user disconnect')
	})
})

