import { Router } from "express";
import authenticateWithRootRedirect from "../handlers/authenticators/authenticateWithRootRedirect.ts";
import simpleRender from "../handlers/controllers/simpleRender.ts";

const loginRouter = Router();

loginRouter.get("/", simpleRender("login"));
loginRouter.post("/", authenticateWithRootRedirect);

export default loginRouter;