import passport from "passport";

const authenticateAfterSignUp = passport.authenticate("local", {
  failureRedirect: "/",
  successRedirect: "/"
});

export default authenticateAfterSignUp;