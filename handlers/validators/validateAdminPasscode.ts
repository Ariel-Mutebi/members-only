import { body } from "express-validator";

const ADMIN_PASSCODE = "Bro really thinks he's an admin."

const validateAdminPasscode = [
  body("id")
    .isInt()
    .withMessage("Please log in before tying to become an admin."),
  body("membershipStatus")
    .custom((value) => value === "member")
    .withMessage("You must be a member before you can become an admin."),
  body("passcode")
    .custom((value) => value === ADMIN_PASSCODE)
    .withMessage("Wrong passcode")
];

export default validateAdminPasscode;