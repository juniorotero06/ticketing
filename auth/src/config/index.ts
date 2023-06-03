import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export const PORT = process.env.PORT;
export const SERVICE_NAME = process.env.SERVICE_NAME;
export const CACHE_KEY = process.env.CACHE_KEY;
