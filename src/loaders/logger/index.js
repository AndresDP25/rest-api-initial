import winston from "winston";
import { logLevel } from "../../config/config.js";

const transports = [];
transports.push(new winston.transports.Console());

export const LoggerInstance = winston.createLogger({
  level: logLevel,
  format: winston.format.simple(),
  transports,
});
