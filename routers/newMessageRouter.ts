import { Router } from "express";
import createMessage from "../handlers/controllers/createMessage.ts";
import validateMessage from "../handlers/validators/validateMessage.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import expressAsyncHandler from "express-async-handler";
import simpleRender from "../handlers/controllers/simpleRender.ts";
import preventHacking from "../handlers/validators/preventHacking.ts";

const newMessageRouter = Router();

newMessageRouter.get("/", simpleRender("newMessage"));
newMessageRouter.post("/",
  validateMessage,
  handleValidationErrors("newMessage"),
  preventHacking("author"),
  expressAsyncHandler(createMessage)
);

export default newMessageRouter;