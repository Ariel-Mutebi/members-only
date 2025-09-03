import { Router } from "express";
import renderIndex from "../handlers/controllers/renderIndex.ts";
import signUpRouter from "./signUpRouter.ts";
import renderError from "../handlers/forErrors/renderError.ts";
import joinClubRouter from "./joinClubRouter.ts";
import loginRouter from "./loginRouter.ts";
import newMessageRouter from "./newMessageRouter.ts";
import expressAsyncHandler from "express-async-handler";
import becomeAdminRouter from "./becomeAdminRouter.ts";
import deleteMessageRouter from "./deleteMessageRouter.ts";
import trigger404 from "../handlers/forErrors/trigger404.ts";

const indexRouter = Router();

indexRouter.get("/", expressAsyncHandler(renderIndex));
indexRouter.use("/sign-up", signUpRouter);
indexRouter.use("/join-club", joinClubRouter);
indexRouter.use("/login", loginRouter);
indexRouter.use("/new-message", newMessageRouter);
indexRouter.use("/become-admin", becomeAdminRouter);
indexRouter.use("/delete-message", deleteMessageRouter);
indexRouter.use("/:anything", trigger404);
indexRouter.use(renderError);

export default indexRouter;