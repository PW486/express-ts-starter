import { config } from 'dotenv';
import { existsSync } from 'fs';
import { ConnectionOptions } from 'typeorm';

existsSync('.env') ? config() : config({ path: '.env.example' });

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = Number(process.env.PORT) || 3000;

export const DB_CONFIG: { [name: string]: ConnectionOptions } = {
  "development": {
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
  "test": {
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
  "production": {
    "name": "production",
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "prod",
    "synchronize": false,
    "entities": [
      "dist/api/**/*.entity.js"
    ],
    "logging": [
      "error"
    ]
  }
};
