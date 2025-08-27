import { executeSQLFromFile } from "jsr:@ariel/database-chores";
import { join } from "jsr:@std/path";
import config from "./config.ts";

await executeSQLFromFile(join(import.meta.dirname!, "createTables.sql"), config);