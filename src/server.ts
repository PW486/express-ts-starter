import { createConnection } from 'typeorm';
import app from '@app/app';
import { PORT } from '@app/config/environments';

createConnection().then(() => {
  app.listen(PORT);
});
