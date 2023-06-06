import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// variables creadas de forma declarativa en el archivo .env
export const PORT = process.env.PORT;
export const SERVICE_NAME = process.env.SERVICE_NAME;
export const CACHE_KEY = process.env.CACHE_KEY;
export const MONGO_URI = process.env.MONGO_URI;

//Variables creadas de forma imperatia en el cluster
export const JWT_SECRET = process.env.JWT_SECRET;
