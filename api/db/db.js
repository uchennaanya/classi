import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function connect() {
  try {
    mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
  }
}

const connection = mongoose.connection;

connection.once("open", () => console.log("Connected successfully!!!"));
connection.on("error", (error) => console.error(error));
