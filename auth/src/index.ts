import dbConnection from "./database/database-connection";
import { Server } from "./server";

Server.getInstance().start(dbConnection.connect);
