import { create, getUserByEmail } from "../repositories";

import { BadRequestError } from "../errors";

const createUserService = async (email: string, password: string) => {
  return await create(email, password);
};

const getUserByEmailService = async (email: string) => {
  return await getUserByEmail(email);
};

const existUserInDb = async (spec: {
  email: string;
  error_message: string;
  userIsExist: boolean;
}) => {
  const { email, error_message, userIsExist } = spec;
  const userFind = await getUserByEmailService(email);

  switch (userIsExist) {
    case true:
      if (userFind) {
        throw new BadRequestError(error_message);
      }
      break;
    case false:
      if (!userFind) {
        throw new BadRequestError(error_message);
      }
      break;
  }

  return userFind;
};

export { createUserService, getUserByEmailService, existUserInDb };
