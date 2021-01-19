#!/usr/bin/env node

// environment global access
import logger from 'debug'
import http from 'http'
import app from 'app/app'

logger('prod:server.js')


// Create HTTPS server.
const
  server = http.createServer(app);


// Set listen port
server.listen(app.settings.port);


// Manage Errors
server
  .on('error', onError)
  .on('listening', onListening);


// Event listener for HTTP server "error" event.
function onError(error: any) {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof app.settings.port === 'string'
    ? 'Pipe ' + app.settings.port
    : 'Port ' + app.settings.port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}


// Event listener for HTTP server "listening" event.
function onListening() {
  const addr: any = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  logger(`  -  🚀 Express server ready at ${bind}, access to it by '${process.env.BACK_PROTOCOL}://${process.env.BACK_DOMAIN}${process.env.BACK_PATH}'. Search NodeJS process with PID: ${process.pid}`)
}
