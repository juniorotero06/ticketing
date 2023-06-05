import express from "express";
import { Routes } from "./routes";
import { PORT, SERVICE_NAME } from "./config";
import dbConnection from "./database/database-connection";

const app = express();
app.use(express.json());

app.use(Routes);

const start = () => {
  dbConnection();
  app.listen(PORT, () => {
    console.log(SERVICE_NAME, ": Listening in port ", PORT);
  });
};

start();
