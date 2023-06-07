import { create, getUserByEmail } from "../repositories";

import { BadRequestError } from "../errors";

const createUserService = async (email: string, password: string) => {
  return await create(email, password);
};

const getUserByEmailService = async (email: string) => {
  return await getUserByEmail(email);
};

const existUser = async (object: { email: string; error_message: string }) => {
  const { email, error_message } = object;
  const existingUser = await getUserByEmailService(email);

  if (existingUser) {
    throw new BadRequestError(error_message);
  }
};

export { createUserService, getUserByEmailService, existUser };
