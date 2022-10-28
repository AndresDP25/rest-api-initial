import { Sequelize } from "sequelize";
import {
  dbHost,
  dbName,
  dbPassword,
  dbUser,
  dbPort,
} from "../config/config.js";
// import usersModel from "../models/users.js";

//conexión a la db y configuración sequelize
const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "mysql",
});

export default db;
