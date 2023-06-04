import { CustomError } from "./custom.error";

export class DataBaseConnectionError extends CustomError {
  statusCode: number = 500;
  reason = "Error connecting database";
  constructor() {
    super("Error connecting to DB");
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
