import path from 'path';
import person from './api/person';

export default function(app) {
  // Insert routes below
  app.use('/api/persons', person);
}
