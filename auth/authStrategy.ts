import { Strategy } from "passport-local";
import { compare } from "bcryptjs";
import usernameIsInUse from "../db/usernameIsInUse.ts";
import selectUserByUsername from "../db/selectUserByUsername.ts";

const authStrategy = new Strategy(async(username, password, done) => {
  try {
    if(!await usernameIsInUse(username)) {
      return done(null, false, { message: "There is no account with that username." });
    }
    
    const user = await selectUserByUsername(username);

    if(!await compare(password, user.password)) {
      return done(null, false, { message: "Incorrect password." });
    }

    return done(null, user);
  } catch (error) {
    console.error(error);
  }
});

export default authStrategy;