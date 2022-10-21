import winston from "winston";
import { LOG_LEVEL } from "../../config/config.js";

const transports = [];
transports.push(new winston.transports.Console());

export const LoggerInstance = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.simple(),
  transports,
});
