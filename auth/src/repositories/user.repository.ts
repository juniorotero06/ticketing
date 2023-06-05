import { Model } from "mongoose";

export class UserRepository {
  _user: Model<any>;
  constructor(User: Model<any>) {
    this._user = User;
  }

  // async create(email: string, password: string) {
  //   const user = this._user.build({ email, password });
  //   return await user.save();
  // }

  async getUserByEmail(email: string) {
    return await this._user.findOne({ email });
  }
}
