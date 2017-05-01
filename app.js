const express = require('express')
const app = express()
var server = app.listen(process.env.PORT)
var socketio = require('socket.io')
var io = socketio.listen(server);

app.use(express.static('public'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html')
});

app.get('/ar2', function(req, res, next) {
	res.sendFile(__dirname + '/public/aframeAR.html')
});

app.get('/vr', function(req, res, next) {
	res.sendFile(__dirname + '/public/vr.html')
})

app.get('/ar1', function(req, res, next) {
	res.sendFile(__dirname + '/public/ar1.html')
})

app.get('/drawingVR', function(req, res, next) {
	res.sendFile(__dirname + '/public/drawingVR.html')
})

app.get('/drawingAR', function(req, res, next) {
	res.sendFile(__dirname + '/public/drawingAR.html')
})

io.on('connection', function(socket) {
	console.log('A user connected')

	socket.on('personalTest', function(data) {
		socket.broadcast.emit('newtext', data)
	})
	
	socket.on('newShape', function(data) {
		socket.broadcast.emit('newShape', data)
	})	

	socket.on('ar2', function(data) {
		socket.broadcast.emit('toAr2', data)
	})

	socket.on('sendingDrawing', function(data) {
		socket.broadcast.emit('toVRDrawing', data)
	})

	socket.on('drawAr', function(data) {
		socket.broadcast.emit('goTodrawAr', data)
	})

	socket.on('sendingShapeAr2', function(data) {
		socket.broadcast.emit('newShapeAr2', data)
	})

	socket.on('disconnect', function() {
		console.log('A user disconnect')
	})
})

