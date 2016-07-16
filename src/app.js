'use strict';

import http from 'http';
import express from 'express';
import config from './config/environment';
import expressConfig from './config/express';
import routes from './routes';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import seed from './config/seed';


// Connect/configure MongoDB
mongoose.Promise = bluebird;
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { seed() }

// Setup server
const app = express();
const server = http.createServer(app);
expressConfig(app);
routes(app)

// Start server
function startServer() {
  server.listen(config.port, function() {
    console.log('Express server listening on %d, in %s mode', config.port, process.env.NODE_ENV);
  });
}

setImmediate(startServer);

// Expose app
export default app;
