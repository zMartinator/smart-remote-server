'use strict';

import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  id: String,
  friends: [String]
});

export default mongoose.model('Person', PersonSchema);
