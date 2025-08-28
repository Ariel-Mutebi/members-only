import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import renderSignUp from "../handlers/controllers/renderSignUp.ts";
import createUser from "../handlers/controllers/createUser.ts";
import validateUser from "../handlers/validators/validateUser.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import authenticateWithRootRedirect from "../handlers/authenticators/authenticateWithRootRedirect.ts";

const signUpRouter = Router();

signUpRouter.get("/", renderSignUp);
signUpRouter.post("/",
  validateUser,
  handleValidationErrors("signUp"),
  expressAsyncHandler(createUser),
  authenticateWithRootRedirect
);

export default signUpRouter;