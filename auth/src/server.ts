import express from "express";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import { Routes } from "./routes";
import { PORT, SERVICE_NAME, JWT_SECRET } from "./config";

dotenv.config();

class Server {
  private static instance: Server;
  private app: express.Application;

  private constructor() {
    this.app = express();
    this.app.set("trust proxy", true);
    this.app.use(express.json());
    this.app.use(
      cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== "test",
      })
    );

    this.app.use(Routes);
  }

  public getApp(): express.Application {
    return this.app;
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  public start(databaseConnection: Function): void {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET must be defined");
    }
    databaseConnection();
    this.app.listen(PORT, () => {
      console.log(SERVICE_NAME, ": Listening on port ", PORT);
    });
  }
}

export { Server };
