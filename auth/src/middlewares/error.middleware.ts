import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const httpStatus = err.status || 500;

  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || "Internal Server Error",
  });
};

export default errorMiddleware;
