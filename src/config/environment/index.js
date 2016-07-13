'use strict';

import path from 'path';
import _ from 'lodash';

// All configurations will extend these options
const all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

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
        safe: true
      }
    }
  }
};

// Export the config object based on the NODE_ENV
export default _.merge( all, require('./' + process.env.NODE_ENV + '.js').default || {});
