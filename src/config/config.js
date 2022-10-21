export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "disney_alkemy";
export const DB_PORT = process.env.DB_PORT || 3306;

//Log
export const LOG_LEVEL = "silly";
//SWAGGER
export const PATH = "/docs";

//auth
export const AUTH_SECRET = process.env.AUTH_SECRET || "s3cret";
export const AUTH_TTL = process.env.AUTH_TTL || "1d";
