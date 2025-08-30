import { ErrorRequestHandler } from "express";
import CustomError from "../../interfaces/CustomError.ts";

const renderError: ErrorRequestHandler = (error: CustomError, _req, res, _next) => {
  if(!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).render("error", { error });
};

export default renderError;