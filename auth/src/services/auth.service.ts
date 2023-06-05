import { UserService } from "./user.service";

export class AuthService {
  _userService: UserService;
  constructor(UserService: UserService) {
    this._userService = UserService;
  }

  async verifyEmail(email: string) {
    return await this._userService.getUserByEmail(email);
  }
}
