import { Router } from "express";
import renderLogin from "../handlers/controllers/renderLogin.ts";
import authenticateWithRootRedirect from "../handlers/authenticators/authenticateWithRootRedirect.ts";

const loginRouter = Router();

loginRouter.get("/", renderLogin);
loginRouter.post("/", authenticateWithRootRedirect);

export default loginRouter;