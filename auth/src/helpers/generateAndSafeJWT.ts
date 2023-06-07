import { Request } from "express";
import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";

export const generateAndSafeJWT = (
  req: Request,
  info: { id: string; email: string }
): void => {
  // Generate jasonwebtoken
  const userJwt = jwt.sign(
    {
      id: info.id,
      email: info.email,
    },
    JWT_SECRET!
  );

  // Store it on session object
  req.session = {
    jwt: userJwt,
  };
};
