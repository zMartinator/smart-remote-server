'use strict';

// Production specific configuration
const config = {
  // Server IP
  ip: process.env.IP || undefined,

  // Server port
  port: process.env.PORT || 80,

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/persons-rest-api-prod'
  }
};

export default config;
