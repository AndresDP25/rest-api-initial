import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const dbHost = process.env.DB_HOST;
export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbName = process.env.DB_NAME;
export const dbPort = process.env.DB_PORT;
export const databaseUrl = process.env.DATABASE_URL;
//Log
export const logLevel = process.env.LOG_LEVEL;
//SWAGGER
export const path = process.env.PATH;
