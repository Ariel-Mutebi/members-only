import { executeSQLFromFile } from "@ariel/database-chores";
import { join } from "@std/path";
import config from "./singletons/config.ts";

await executeSQLFromFile(join(import.meta.dirname!, "createTables.sql"), config);