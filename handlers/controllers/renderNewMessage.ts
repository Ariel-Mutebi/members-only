import type { RequestHandler } from "express";

const renderNewMessage: RequestHandler = (_req, res) => {
  res.render("newMessage");
};

export default renderNewMessage;