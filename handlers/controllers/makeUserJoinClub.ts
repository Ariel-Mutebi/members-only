import type { Request, Response } from "express";
import updateMembership from "../../db/updateMembership.ts";
import User from "../../interfaces/User.ts";

const makeUserJoinClub = async(req: Request, res: Response) => {
  await updateMembership((req.user as User).id);
  res.redirect("/");
};

export default makeUserJoinClub;