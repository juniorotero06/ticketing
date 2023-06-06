import { Request, Response } from "express";
import { signUpService } from "../services";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors";
import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";

const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const signUpUser = await signUpService(email, password);

  // Generate jasonwebtoken
  const userJwt = jwt.sign(
    {
      id: signUpUser.id,
      email: signUpUser.email,
    },
    JWT_SECRET!
  );

  // Store it on session object
  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(signUpUser);
};

export { signUp };
