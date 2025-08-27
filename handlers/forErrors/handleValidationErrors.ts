import { validationResult } from "express-validator";
import type { RequestHandler } from "npm:express";

const handleValidationErrors: (view: string) => RequestHandler = (view) =>  (req, res, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) return next();
  res.render(view, { errors: errors.array(), previous: req.body });
};

export default handleValidationErrors;