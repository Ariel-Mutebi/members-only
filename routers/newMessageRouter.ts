import { Router } from "express";
import renderNewMessage from "../handlers/controllers/renderNewMessage.ts";
import createMessage from "../handlers/controllers/createMessage.ts";
import validateMessage from "../handlers/validators/validateMessage.ts";
import handleValidationErrors from "../handlers/forErrors/handleValidationErrors.ts";
import expressAsyncHandler from "express-async-handler";

const newMessageRouter = Router();

newMessageRouter.get("/", renderNewMessage);
newMessageRouter.post("/",
  validateMessage,
  handleValidationErrors("newMessage"),
  expressAsyncHandler(createMessage)
);

export default newMessageRouter;