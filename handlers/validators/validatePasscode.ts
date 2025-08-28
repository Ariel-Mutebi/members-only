import { body } from "express-validator";

const PASSCODE = "I'd like to join the club.";

const validatePasscode = [
  body("passcode")
    .custom((value) => value === PASSCODE)
    .withMessage(`Please type "${PASSCODE}"`)
];

export default validatePasscode;