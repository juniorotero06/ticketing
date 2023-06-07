import { Request, Response } from "express";
import { signUpService, signInService } from "../services";
import { generateAndSafeJWT } from "../helpers/generateAndSafeJWT";

const currentUser = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};

const signOut = (req: Request, res: Response) => {
  req.session = null;
  res.send({});
};

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await signInService(email, password);

  generateAndSafeJWT(req, {
    id: existingUser.id,
    email: existingUser.email,
  });

  res.status(200).send(existingUser);
};

const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const signUpUser = await signUpService(email, password);

  generateAndSafeJWT(req, {
    id: signUpUser.id,
    email: signUpUser.email,
  });

  res.status(201).send(signUpUser);
};

export { signUp, currentUser, signOut, signIn };
