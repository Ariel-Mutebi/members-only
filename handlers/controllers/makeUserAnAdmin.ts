import type { Request, Response } from "express";
import updateToAdmin from "../../db/updateToAdmin.ts";

const makeUserAnAdmin = async(req: Request, res: Response) => {
  await updateToAdmin(req.body.id);
  res.redirect("/");
};

export default makeUserAnAdmin;