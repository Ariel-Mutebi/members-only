import type { NextFunction, Request, Response } from "express";
import insertUser from "../../db/insertUser.ts";

const createUser = async(req: Request, _res: Response, next: NextFunction) => {
  await insertUser(req.body);
  next();
};

export default createUser;