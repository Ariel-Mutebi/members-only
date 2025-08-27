import type { Request, Response } from "express";
import insertUser from "../../db/insertUser.ts";

const createUser = async(req: Request, res: Response) => {
  await insertUser(req.body);
  res.redirect("/");
};

export default createUser;