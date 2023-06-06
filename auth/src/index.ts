import express from "express";
import cookieSession from "cookie-session";
import { Routes } from "./routes";
import { PORT, SERVICE_NAME, JWT_SECRET } from "./config";
import dbConnection from "./database/database-connection";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(Routes);

const start = () => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET must be defined");
  }
  dbConnection();
  app.listen(PORT, () => {
    console.log(SERVICE_NAME, ": Listening in port ", PORT);
  });
};

start();
