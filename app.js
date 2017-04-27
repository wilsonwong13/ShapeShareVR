const express = require('express')
const app = express()
var server = app.listen(process.env.PORT)
var socketio = require('socket.io')
var io = socketio(server);
var aframe=require('aframe');
var aframe-broadcast-component=require('aframe-broadcast-component');

app.use(express.static('public'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html')
});


io.on('connection', function(socket) {
	console.log('A user connected')

	socket.on('disconnect', function() {
		console.log('A user disconnect')
	})
})

