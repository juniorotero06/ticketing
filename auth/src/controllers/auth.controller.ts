import { Request, Response } from "express";
import { signUpService } from "../services";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors";

const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const signUpSrv = await signUpService(email, password);

  res.status(201).send(signUpSrv);
};

export { signUp };
