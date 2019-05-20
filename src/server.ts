import app from '@app/app';
import { PORT } from '@app/config/environments';
import { createConnection } from 'typeorm';

createConnection().then(() => {
  app.listen(PORT);
});
