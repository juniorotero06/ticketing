import { Router } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares";
import { signIn } from "../controllers";

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
  signIn
);

export { router as SignInRouter };
