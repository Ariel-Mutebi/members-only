import type  { Request, Response } from "npm:express";

const renderSignUp = (req: Request, res: Response) => {
  res.render("signUp");
};

export default renderSignUp;