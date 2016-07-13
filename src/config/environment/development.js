'use strict';

// Development specific configuration
// ==================================

const config = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/persons-rest-api-dev'
  },

  // Seed database on startup
  seedDB: true
};

export default config;
