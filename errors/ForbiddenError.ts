import CustomError from "../interfaces/CustomError.ts";

class ForbiddenError extends Error implements CustomError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
    this.statusCode = 403;
  }
}

export default ForbiddenError;