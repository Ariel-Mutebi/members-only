import CustomError from "../interfaces/CustomError.ts";

class UnauthorizedError extends Error implements CustomError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

export default UnauthorizedError;