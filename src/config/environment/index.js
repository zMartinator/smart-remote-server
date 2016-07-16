import path from 'path';
import developmentConfig from './development';
import productionConfig from './production';
import testConfig from './test';

const env = process.env.NODE_ENV;

// All configurations will extend these options
const all = {
  env,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Server port
  port: process.env.PORT || 1337,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true,
      },
    },
  },
};

// Export the config object based on the NODE_ENV
let config = {};

if(env === 'production')
  config = productionConfig;
else if (env === 'test')
  config = testConfig;
else
  config = developmentConfig;

export default {
  ...all,
  ...config,
};
