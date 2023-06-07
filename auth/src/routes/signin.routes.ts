import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares";
import { User } from "../models";
import { Password } from "../helpers/password";
import { BadRequestError } from "../errors";
import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";

const router: Router = Router();

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError("invalid credentials");
    }

    const passwordMatch = await Password.compare(
      existingUser!.password,
      password
    );

    if (!passwordMatch) {
      throw new BadRequestError("invalid credentials");
    }

    // Generate jasonwebtoken
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      JWT_SECRET!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as SignInRouter };
