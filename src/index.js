import express from "express";
import { PORT, PATH } from "./config/config.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./loaders/swagger/swagger.js";
import { LoggerInstance } from "./loaders/logger/index.js";
// import dotenv from "dotenv";
import morgan from "morgan";
import users from "./routes/users.js";
import status from "./routes/status.js";
import db from "./database/db.js";

const app = express();

// app.use(cors());
app.use(express.json());
//para capturar datos de formularios,está en false porque no vamos a recibir img
app.use(express.urlencoded({ extended: false }));
//Registrador de solicitudes
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.code = 404;
//   next(err);
// });
// app.use((err, req, res, next) => {
//   const code = err.code || 500;
//   logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//   logger.errr(err.stack);
//   res.status(code);
//   const body = {
//     error: {
//       code,
//       message: err.message,
//     },
//   };
//   res.json(body);
// });
const spec = swaggerJsDoc(options);
app.use(PATH, swaggerUi.serve, swaggerUi.setup(spec));

app.use("/users", users);
app.use("/status", status);

//verificación de conexión a la db
try {
  await db.authenticate();
  // hacemos que se cree una nueva db con el modelo
  // db.sync({ alter: true });
  db.sync({ force: false });
  console.log("DB loaded and connected");
} catch (error) {
  console.log(`Error conection: ${error}`);
}

app.listen(PORT, () => {
  LoggerInstance.info(`Server UP running in http://localhost:${PORT}/`);
});
