import type { RequestHandler } from "express";

const simpleRender: (view: string) => RequestHandler = (view) => (_req, res) => {
  res.render(view);
};

export default simpleRender;