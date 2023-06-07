import express from "express";
import cookieSession from "cookie-session";
import { Routes } from "./routes";
import { PORT, SERVICE_NAME, JWT_SECRET } from "./config";
import dbConnection from "./database/database-connection";

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
        secure: true,
      })
    );

    this.app.use(Routes);
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  public start(): void {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET must be defined");
    }
    dbConnection.connect();
    this.app.listen(PORT, () => {
      console.log(SERVICE_NAME, ": Listening on port ", PORT);
    });
  }
}

Server.getInstance().start();
