import CustomError from "../interfaces/CustomError.ts";

class NotFoundError extends Error implements CustomError{
  statusCode: number;

  constructor(message = "The resource you are trying to access could not be found.") {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

export default NotFoundError;