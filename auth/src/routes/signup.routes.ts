import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError, BadRequestError } from "../errors";
import { User } from "../models/index";
// import { AuthController } from "../controllers";
// import { AuthService, UserService } from "../services";
// import { UserRepository } from "../repositories";

const router: Router = Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ email, password });
    await user.save();

    res.status(201).send(user);
  }
);

export { router as SignUpRouter };

// const userRepository = new UserRepository(User);
// const userService = new UserService(userRepository);
// const authService = new AuthService(userService);
// const authController = new AuthController(authService);
// router.post(
//   "/signup",
//   [
//     body("email").isEmail().withMessage("Email must be valid"),
//     body("password")
//       .trim()
//       .isLength({ min: 4, max: 20 })
//       .withMessage("Password must be between 4 and 20 characters"),
//   ],
//   async (req: Request, res: Response) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw new RequestValidationError(errors.array());
//     }
//     authController.signUp(req, res);
//   }
// );
