import { body } from "express-validator";

const validateMessage = [
  body("body")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Please write a message."),
  body("author")
    .isInt()
    .withMessage("You must be logged in to post a message.")
];

export default validateMessage;