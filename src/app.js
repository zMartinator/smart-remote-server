// TODO: githooks

import config from './config/environment';
import routes from './routes';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
// import seed from './config/seed';
import app from './config/express';


// Connect/configure MongoDB
// mongoose.Promise = bluebird;
// mongoose.connect(config.mongo.uri, config.mongo.options);
// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error: ' + err); // eslint-disable-line
//   process.exit(-1);
// });

// Populate databases with sample data
// if (config.seedDB)
//   seed();

// Setup routes
routes(app);

// Start app
function startApp() {
  app.listen(config.port, () => {
    console.info('Express server listening on %d, in %s mode', config.port, process.env.NODE_ENV); // eslint-disable-line
  });
}

setImmediate(startApp);

// Expose app
export default app;
