import type { Request, Response } from "npm:express";

const renderIndex = (_req: Request, res: Response) => {
  res.render("index");
};

export default renderIndex;