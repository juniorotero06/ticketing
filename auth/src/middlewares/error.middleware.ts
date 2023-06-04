import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom.error";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  return res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};

export default errorMiddleware;
