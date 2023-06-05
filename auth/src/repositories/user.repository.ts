import { User } from "../models";

const create = async (email: string, password: string) => {
  const user = User.build({ email, password });
  await user.save();
  return user;
};

const getUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export { create, getUserByEmail };
