import { Request, Response, NextFunction } from "express";
import { NotAuthorizeError } from "../errors";

const requireAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizeError();
  }
  next();
};

export default requireAuthMiddleware;
