import { Router } from "express";
import simpleRender from "../handlers/controllers/simpleRender.ts";
import validateAdminPasscode from "../handlers/validators/validateAdminPasscode.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import expressAsyncHandler from "express-async-handler";
import makeUserAnAdmin from "../handlers/controllers/makeUserAnAdmin.ts";
import preventHacking from "../handlers/validators/preventHacking.ts";

const becomeAdminRouter = Router();

becomeAdminRouter.get("/", simpleRender("becomeAdmin"));
becomeAdminRouter.post("/",
  validateAdminPasscode,
  handleValidationErrors("becomeAdmin"),
  preventHacking(),
  expressAsyncHandler(makeUserAnAdmin)
);

export default becomeAdminRouter;