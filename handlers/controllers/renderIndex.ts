import type { Request, Response } from "npm:express";

const renderIndex = (_req: Request, res: Response) => {
  console.log(res.locals);
  res.render("index");
};

export default renderIndex;