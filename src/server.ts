import app from 'app';
import { PORT } from 'config/environments';
import { createConnection } from 'typeorm';

createConnection().then(() => {
  app.listen(PORT);
});
