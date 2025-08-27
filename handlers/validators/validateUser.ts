import { body } from "express-validator";

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
    .withMessage("Username " + lengthError),
  body("password")
    .trim()
    .isLength(minMaxOptions)
    .withMessage("Password"  + lengthError),
  body("confirmatoryPassword")
    .trim()
    .custom((value, { req }) => {
      if(value !== req.body.password) throw new Error("Passwords do not match.");
      return true;
    })
];

export default validateUser;