import dotenv from "dotenv";
dotenv.config({ path: ".env.example" });

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = Number(process.env.PORT) || 3000;
export const DB_HOST = process.env.DB_HOST;
export const DB_PASSWORD = process.env.DB_PASSWORD;
