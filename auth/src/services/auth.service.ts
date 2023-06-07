import { createUserService, existUser } from "./index";

const signUpService = async (email: string, password: string) => {
  existUser({ email, error_message: "Email in use" });
  const created = await createUserService(email, password);
  return created;
};

export { signUpService };
