import express from "express";
import passport from "passport";
import session from "express-session";
import indexRouter from "./routers/indexRouter.ts";
import sessionOptions from "./auth/sessionOptions.ts";
import copyUserToLocals from "./handlers/copyUserToLocals.ts";
import "./auth/processPassport.ts";
import 'jsr:@std/dotenv/load';

const app = express();
const PORT = Number(Deno.env.get("PORT")) || 443;

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(session(sessionOptions));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(copyUserToLocals);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if(error) {
    console.error(error);
  } else {
    console.log(`App listening on port ${PORT}.`);
  };
});