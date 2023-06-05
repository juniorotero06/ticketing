import { UserRepository } from "../repositories";

export class UserService {
  _userRepository: UserRepository;
  constructor(UserRepository: UserRepository) {
    this._userRepository = UserRepository;
  }

  // async create(email: string, password: string) {
  //   return await this._userRepository.create(email, password);
  // }

  async getUserByEmail(email: string) {
    return await this._userRepository.getUserByEmail(email);
  }
}
