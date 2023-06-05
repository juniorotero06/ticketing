import { createUserService, getUserByEmailService } from "./index";
import { BadRequestError } from "../errors";

const signUpService = async (email: string, password: string) => {
  const existingUser = await getUserByEmailService(email);

  if (existingUser) {
    throw new BadRequestError("Email in use");
  }

  const created = await createUserService(email, password);

  return created;
};

export { signUpService };
