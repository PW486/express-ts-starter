import dotenv from "dotenv";

dotenv.config({ path: ".env.example" });

export const env = process.env.NODE_ENV || 'development';
export const port = Number(process.env.PORT) || 3000;

export const db = {
  development: {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
    "synchronize": true,
    "entities": [
      "dist/api/**/*.entity.js"
    ]
  },
  test: {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
    "synchronize": true,
    "entities": [
      "dist/api/**/*.entity.js"
    ]
  },
  production: {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": false,
    "entities": [
      "dist/api/**/*.entity.js"
    ]
  },
}
