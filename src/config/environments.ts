import { config } from 'dotenv';
import { existsSync } from 'fs';
import { ConnectionOptions } from 'typeorm';

existsSync('.env') ? config() : config({ path: '.env.example' });

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = Number(process.env.PORT) || 3000;
export const DB_HOST = process.env.DB_HOST;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const JWT_SECRET = process.env.JWT_SECRET || 'jwtsecret';

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
    "type": "postgres",
    "host": DB_HOST,
    "port": 5432,
    "username": "prod",
    "password": DB_PASSWORD,
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
