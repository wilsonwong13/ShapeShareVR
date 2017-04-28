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

app.get('/vr', function(req, res, next) {
	res.sendFile(__dirname + '/public/vr.html')
})

app.get('/home', function(req, res, next) {
	res.sendFile(__dirname + '/public/switch.html')
})

io.on('connection', function(socket) {
	console.log('A user connected')

	setTimeout(function(){
    socket.send({"geometry": "primitive: sphere; radius: 1000;",
    	"position": "-10000 1200 -3000",
    	"material": "color:#ff0; metalness:0.0; roughness:1.0;",
    	"message":"new Object"
    });
  }, 4000);

	
	socket.on('disconnect', function() {
		console.log('A user disconnect')
	})
})

