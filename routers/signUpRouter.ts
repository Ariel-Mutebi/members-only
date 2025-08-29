import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import createUser from "../handlers/controllers/createUser.ts";
import validateUser from "../handlers/validators/validateUser.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import authenticateWithRootRedirect from "../handlers/authenticators/authenticateWithRootRedirect.ts";
import simpleRender from "../handlers/controllers/simpleRender.ts";

const signUpRouter = Router();

signUpRouter.get("/", simpleRender("signUp"));
signUpRouter.post("/",
  validateUser,
  handleValidationErrors("signUp"),
  expressAsyncHandler(createUser),
  authenticateWithRootRedirect
);

export default signUpRouter;