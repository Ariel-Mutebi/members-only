import type { RequestHandler } from "express";

const renderJoinClub: RequestHandler = (_req, res) => {
  res.render("joinClub");
};

export default renderJoinClub;