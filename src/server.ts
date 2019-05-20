import { createConnection } from 'typeorm';
import app from '@app/app';
import { DB_CONFIG, NODE_ENV, PORT } from '@app/config/environments';

createConnection(DB_CONFIG[NODE_ENV]).then(() => {
  app.listen(PORT);
});
