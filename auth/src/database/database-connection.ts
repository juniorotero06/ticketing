import mongoose from "mongoose";
import { MONGO_URI } from "../config";

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI!);
    console.log("auth-srv connecting to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default dbConnection;
