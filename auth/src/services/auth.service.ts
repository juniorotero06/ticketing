import { createUserService, existUserInDb } from "./index";
import { Password } from "../helpers/password";
import { BadRequestError } from "../errors";

const signUpService = async (email: string, password: string) => {
  await existUserInDb({
    email,
    error_message: "Email in use",
    userIsExist: true,
  });
  const created = await createUserService(email, password);
  return created;
};

const signInService = async (email: string, password: string) => {
  const existingUser = await existUserInDb({
    email,
    error_message: "invalid credentials",
    userIsExist: false,
  });

  const passwordMatch = await Password.compare(
    existingUser!.password,
    password
  );

  if (!passwordMatch) {
    throw new BadRequestError("invalid credentials");
  }

  return existingUser;
};

export { signUpService, signInService };
