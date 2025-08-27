import type { Request, Response } from "npm:express";

const renderIndex = (req: Request, res: Response) => {
  res.render("index");
};

export default renderIndex;