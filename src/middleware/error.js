import { LoggerInstance } from "../loaders/logger/index.js";
export const errorMiddleware = (error, req, res, next) => {
  const code = 500 || error.code;
  LoggerInstance.error(
    `${code} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
  const body = {
    error: {
      code,
      message: error.message,
    },
  };
  res.status(code).json(body);
};
