import passport from "passport";
import authStrategy from "./authStrategy.ts";
import selectUserByID from "../db/selectUserByID.ts";
import User from "../interfaces/User.ts";

passport.use(authStrategy);
passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});
passport.deserializeUser(async(id, done) => {
  try {
    done(null, await selectUserByID(id as string));
  } catch (error) {
    console.error(error);
  }
});