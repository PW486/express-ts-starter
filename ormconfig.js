const { DB_HOST, DB_PASSWORD } = require('./dist/config/environments');

module.exports = {
  "type": "postgres",
  "host": DB_HOST,
  "port": 5432,
  "username": "prod",
  "password": DB_PASSWORD,
  "database": "prod",
  "entities": [
    "dist/api/**/*.entity.js"
  ],
  "migrations": [
    "dist/migration/*.js"
  ],
  "cli": {
    "migrationsDir": "src/migration"
  }
};
