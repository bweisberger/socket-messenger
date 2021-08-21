#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
import debug from 'debug';
import http from 'http';

/**
 * Get port from environment and store in Express.
 */

const PORT = 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('listening', onListening);


/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  var addr = server.address();
  debug('Listening on port ' + addr.port);
}
