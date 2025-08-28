import passport from "passport";

const authenticateWithRootRedirect = passport.authenticate("local", {
  failureRedirect: "/",
  successRedirect: "/"
});

export default authenticateWithRootRedirect;