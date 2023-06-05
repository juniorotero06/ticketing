import { Request, Response } from "express";
import { AuthService } from "../services";
import { User } from "../models";
import { BadRequestError } from "../errors";

export class AuthController {
  _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
  }

  async signUp(req: Request, res: Response) {
    const { email, password } = req.body;

    const existingUser = await this._authService.verifyEmail(email);

    if (existingUser) {
      throw new BadRequestError("Email in use");
      // console.log("ExistingUser: ", existingUser);
    }

    const user = User.build({ email, password });
    await user.save();

    return res.status(201).send(user);
  }
}
