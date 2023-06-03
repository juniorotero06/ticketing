import express from "express";
import { Routes } from "./routes";
import { PORT, SERVICE_NAME } from "./config";

const app = express();
app.use(express.json());

app.use(Routes);

app.listen(3000, () => {
  console.log(SERVICE_NAME, ": Listening in port ", PORT);
});
