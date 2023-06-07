import mongoose from "mongoose";
import { MONGO_URI } from "../config";

class Database {
  private static instance: Database;

  private constructor() {
    // Evitar instanciación directa
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(MONGO_URI!);
      console.log("auth-srv connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  }
}

export default Database.getInstance();
