import { body } from "express-validator";
import usernameIsInUse from "../../db/usernameIsInUse.ts";

const minMaxOptions = { min: 1, max: 255 };
const lengthError = "must be between 1 and 255 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("First name " + lengthError),
  body("lastName")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Last name " + lengthError),
  body("username")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Username " + lengthError)
    .custom(async(value) => {
      if(await usernameIsInUse(value)) throw new Error("That username is in use.");
    }),
  body("password")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Password"  + lengthError),
  body("confirmatoryPassword")
    .trim()
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match.")
];

export default validateUser;