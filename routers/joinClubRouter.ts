import { Router } from "express";
import validateMemberPasscode from "../handlers/validators/validateMemberPasscode.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import expressAsyncHandler from "express-async-handler";
import makeUserJoinClub from "../handlers/controllers/makeUserJoinClub.ts";
import simpleRender from "../handlers/controllers/simpleRender.ts";
import preventHacking from "../handlers/validators/preventHacking.ts";

const joinClubRouter = Router();

joinClubRouter.get("/", simpleRender("joinClub"));
joinClubRouter.post("/",
  validateMemberPasscode,
  handleValidationErrors("joinClub"),
  preventHacking(),
  expressAsyncHandler(makeUserJoinClub)
);

export default joinClubRouter;