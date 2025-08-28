import { Router } from "express";
import renderJoinClub from "../handlers/controllers/renderJoinClub.ts";
import validatePasscode from "../handlers/validators/validatePasscode.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import expressAsyncHandler from "express-async-handler";
import makeUserJoinClub from "../handlers/controllers/makeUserJoinClub.ts";

const joinClubRouter = Router();

joinClubRouter.get("/", renderJoinClub);
joinClubRouter.post("/",
  validatePasscode,
  handleValidationErrors("joinClub"),
  expressAsyncHandler(makeUserJoinClub)
);

export default joinClubRouter;