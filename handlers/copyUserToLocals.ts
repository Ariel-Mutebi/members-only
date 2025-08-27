import type { RequestHandler } from "express";

const copyUserToLocals: RequestHandler = (req, res, next) => {
  res.locals.user = req.user;
  next();
};

export default copyUserToLocals;