import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

// Asi se modifica una interfaz ya existente, agregar una propiedad
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

const currentUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, JWT_SECRET!) as UserPayload;
    req.currentUser = payload;
  } catch (error) {}
  next();
};

export default currentUserMiddleware;
