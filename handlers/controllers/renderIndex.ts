import type { Request, Response } from "npm:express";
import selectMessages from "../../db/selectMessages.ts";
import selectUserByID from "../../db/selectUserByID.ts";

const renderIndex = async(_req: Request, res: Response) => {
  const messagesWithoutAuthorObjects = await selectMessages();
  const  messagesWithAuthorObjects = await Promise.all(
    messagesWithoutAuthorObjects.map(async(message) => {
      const messageWithAuthorObject = { ...message };
      messageWithAuthorObject.author = await selectUserByID(messageWithAuthorObject.author as number);
      return messageWithAuthorObject;
    })
  );
  res.render("index", { messages: messagesWithAuthorObjects });
};

export default renderIndex;