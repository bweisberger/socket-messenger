#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
import debug from 'debug';
import { createServer } from 'http';
import { Server } from 'socket.io';
import MessageService from '../services/MessageService';

/**
 * Get port from environment and store in Express.
 */

const PORT = 3000;
app.set('port', PORT);

/**
 * Create HTTP server.
 */

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
  origin: "http://localhost:8080",
  methods: ["GET", "POST"],
  credentials: false
  }
});
/**
 * Listen on provided port, on all network interfaces.
 */
 io.on('connection', socket => {
  console.log('user connected');
  let messagePollingInterval
  socket.on('user logged in', (userName) => {
    if (userName) {
      clearInterval(messagePollingInterval);
      console.log(`${userName} logged in. Starting polling`);
      messagePollingInterval = setInterval(async () => {
        const newMessages = MessageService.getNewMessagesForUser(userName);
        if (newMessages.length) {
          io.emit('foundNewMessages', newMessages);
        }
        io.emit('polling', userName);
      }, 1000);
    }
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
    console.log('stopping polling');
    clearInterval(messagePollingInterval);
    messagePollingInterval = null;
  })
})
/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  var addr = httpServer.address();
  debug('Listening on port ' + addr.port);
  console.log("Listening on port", PORT);
}

httpServer.listen(PORT);
httpServer.on('listening', onListening);


