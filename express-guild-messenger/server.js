const app = require('express')();
const http = require('Server')(app);
const io = require('socket.io')(http);

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('index.html');
});

io.on('connect', socket => {
  console.log('user connected');
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

http.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})