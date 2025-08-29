import { body } from "express-validator";

const MEMBER_PASSCODE = "I'd like to join the club.";

const validateMemberPasscode = [
  body("passcode")
    .custom((value) => value === MEMBER_PASSCODE)
    .withMessage(`Please type "${MEMBER_PASSCODE}"`),
  body("id")
    .isInt()
    .withMessage("Please log in before trying to join the club.")
];

export default validateMemberPasscode;