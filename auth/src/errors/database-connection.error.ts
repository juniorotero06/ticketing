import { CustomError } from "./custom.error";

export class DataBaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting database";
  constructor() {
    super("Error connecting to DB");
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
