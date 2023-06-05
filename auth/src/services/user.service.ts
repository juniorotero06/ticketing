import { create, getUserByEmail } from "../repositories";

const createUserService = async (email: string, password: string) => {
  return await create(email, password);
};

const getUserByEmailService = async (email: string) => {
  return await getUserByEmail(email);
};

export { createUserService, getUserByEmailService };
