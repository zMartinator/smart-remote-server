import arduino from './api/arduino';

export default function(app) {
  // Insert routes below
  app.use('/api/arduino', arduino);
}
