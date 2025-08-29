import type { Request, Response } from "express";
import updateMembership from "../../db/updateMembership.ts";

const makeUserJoinClub = async(req: Request, res: Response) => {
  await updateMembership(req.body.id);
  res.redirect("/");
};

export default makeUserJoinClub;