import { Router } from "express";
import deleteMessage from "../handlers/controllers/deleteMessage.ts";
import expressAsyncHandler from "express-async-handler";

const deleteMessageRouter = Router();

deleteMessageRouter.post("/:messageID", expressAsyncHandler(deleteMessage));

export default deleteMessageRouter;