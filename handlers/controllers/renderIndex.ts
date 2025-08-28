import type { Request, Response } from "npm:express";
import selectMessages from "../../db/selectMessages.ts";

const renderIndex = async(_req: Request, res: Response) => {
  const messages = await selectMessages();
  res.render("index", { messages });
};

export default renderIndex;