import mongoose from "mongoose";
const { Schema } = mongoose;

//Definimos nuestro modelo de entrada de la info.
const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("users", usersSchema);

export default User;
