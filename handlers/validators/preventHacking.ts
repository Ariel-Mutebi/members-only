// To post a message from an account that isn't his, a hacker doesn't need to know the password.
// He just needs to make a POST request from his terminal using the curl command with some data
// formatted to look like its from a form, and this data just needs to include a user id, which
// could be any integer. That hack is what this request handler is made to prevent.
import type { RequestHandler } from "express";
import User from "../../interfaces/User.ts";


const preventHacking: RequestHandler = (req, _res, next) => {
  // non-strict equality because the one in request body comes as a string.
  if(req.body.id != (req.user as User)?.id) throw new Error("Log in.");
  next();
};

export default preventHacking;