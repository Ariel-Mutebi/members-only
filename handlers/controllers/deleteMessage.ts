import type { Request, Response } from "express";
import deleteMessageInDatabase from "../../db/deleteMessageInDatabase.ts";

const deleteMessage = async(req: Request, res: Response) => {
  await deleteMessageInDatabase(req.params.messageID);
  res.redirect("/");
};

export default deleteMessage;