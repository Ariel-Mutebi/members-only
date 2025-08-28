import type { RequestHandler } from "express";

const renderLogin: RequestHandler = (_req, res) => {
  res.render("login");
};

export default renderLogin;