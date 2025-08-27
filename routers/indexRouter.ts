import { Router } from "express";
import renderIndex from "../handlers/controllers/renderIndex.ts";
import signUpRouter from "./signUpRouter.ts";
import renderError from "../handlers/forErrors/renderError.ts";

const indexRouter = Router();

indexRouter.get("/", renderIndex);
indexRouter.use("/sign-up", signUpRouter);
indexRouter.use(renderError);

export default indexRouter;