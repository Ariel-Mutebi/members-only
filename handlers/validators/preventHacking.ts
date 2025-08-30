// To post a message from an account that isn't his, a hacker doesn't need to know the password.
// He just needs to make a POST request from his terminal using the curl command with some data
// formatted to look like its from a form, and this data just needs to include a user id, which
// could be any integer. That hack is what this request handler is made to prevent.
import type { RequestHandler } from "express";
import User from "../../interfaces/User.ts";
import UnauthorizedError from "../../errors/UnauthorizedError.ts";

const preventHacking: (nameOfUserIdContainingFormField?: string) => RequestHandler = (
  (nameOfUserIdContainingFormField = "id") => (req, _res, next) => {
    const formID = Number(req.body[nameOfUserIdContainingFormField]);
    const deserializedID = Number((req.user as User)?.id);
    const notBothAreFalsy = Boolean(formID || deserializedID);
    if((formID != deserializedID) && notBothAreFalsy) throw new UnauthorizedError();
    next();
  }
);

export default preventHacking;