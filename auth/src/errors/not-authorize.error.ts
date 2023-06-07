import { CustomError } from "./custom.error";

export class NotAuthorizeError extends CustomError {
  statusCode: number = 401;
  message: string = "Not authorized";
  constructor() {
    super("Not authorized");
    Object.setPrototypeOf(this, NotAuthorizeError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.message }];
  }
}
