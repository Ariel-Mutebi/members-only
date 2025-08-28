import type { Request, Response } from "express";
import insertMessage from "../../db/insertMessage.ts";

const createMessage = async(req: Request, res: Response) => {
  await insertMessage(req.body);
  res.redirect("/");
};

export default createMessage;