import express from "npm:express";
import indexRouter from "./routers/indexRouter.ts";
import 'jsr:@std/dotenv/load';

const app = express();
const PORT = Number(Deno.env.get("PORT"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if(error) {
    console.error(error);
  } else {
    console.log(`App listening on port ${PORT}.`);
  };
});