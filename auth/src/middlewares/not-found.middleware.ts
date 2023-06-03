import { Request, Response, NextFunction } from "express";

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).send({ status: 404, message: "Resource not found" });
};

export default notFoundMiddleware;
