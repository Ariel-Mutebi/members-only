import { body } from "express-validator";

const validateMessage = [
  body("title")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("The title must be between 1 and 255 characters."),
  body("body")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Please write a message."),
  body("author")
    .isInt()
    .withMessage("You must be logged in to post a message.")
];

export default validateMessage;