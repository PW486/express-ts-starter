const { DB_HOST, DB_PASSWORD } = require('./dist/config/environment');

module.exports = [
  {
    "name": "development",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "dev",
    "password": "dev",
    "database": "dev",
    "synchronize": true,
    "entities": [
      "dist/api/**/*.entity.js"
    ],
    "logging": [
      "error",
      "query"
    ]
  },
  {
    "name": "test",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
    "synchronize": true,
    "entities": [
      "dist/api/**/*.entity.js"
    ],
    "logging": [
      "error"
    ]
  },
  {
    "name": "production",
    "type": "postgres",
    "host": DB_HOST,
    "port": 5432,
    "username": "postgres",
    "password": DB_PASSWORD,
    "database": "production",
    "synchronize": false,
    "entities": [
      "dist/api/**/*.entity.js"
    ],
    "logging": [
      "error"
    ]
  }
]
