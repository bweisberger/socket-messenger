const express = require('express');
const app = express();
const logger = require('morgan');
const router = require('./routes');
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: false
  }
});

const PORT = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use('/', router);

io.on('connection', socket => {
  console.log('user connected');
  socket.on('chatMessage2', (message) => {
    console.log('received chatMessage2');
    io.emit('chatMessage1', message);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

http.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})