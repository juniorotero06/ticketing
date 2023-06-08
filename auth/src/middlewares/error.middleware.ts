import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom.error";

const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err); // Imprime el error en la consola para obtener más información
  return res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};

export default ErrorMiddleware;
