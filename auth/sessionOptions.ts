import { SessionOptions } from "express-session";
import 'jsr:@std/dotenv/load';

const sessionOptions: SessionOptions = {
  secret: Deno.env.get("SESSION_SECRET")!,
  resave: false,
  saveUninitialized: false
};

export default sessionOptions;