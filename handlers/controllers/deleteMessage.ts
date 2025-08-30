import type { Request, Response } from "express";
import deleteMessageInDatabase from "../../db/deleteMessageInDatabase.ts";
import User from "../../interfaces/User.ts";
import UnauthorizedError from "../../errors/UnauthorizedError.ts";
import ForbiddenError from "../../errors/ForbiddenError.ts";

const deleteMessage = async(req: Request, res: Response) => {
  const user = req.user as User;

  if(!user) {
    throw new UnauthorizedError(); 
  };

  if(user.membershipStatus !== "admin") {
    throw new ForbiddenError("You must be an admin.");
  };
  
  await deleteMessageInDatabase(req.params.messageID);
  res.redirect("/");
};

export default deleteMessage;