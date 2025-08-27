import { ErrorRequestHandler } from "express";

const renderError: ErrorRequestHandler = (error, _req, res, _next) => {
  res.render("error", { error });
};

export default renderError;