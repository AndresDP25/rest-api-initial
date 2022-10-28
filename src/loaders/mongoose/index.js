import mongoose from "mongoose";
import { databaseUrl } from "../../config/config.js";

mongoose.connect(databaseUrl);

export const db = mongoose.connection;
db.on("error", console.error.bind(console, "error al conectar MongoDB"));
db.once("open", function callback() {
  console.log("¡Conectado a MongoDB!");
});
