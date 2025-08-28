import { recaseKeys } from "@ariel/database-chores";
import Message from "../interfaces/Message.ts";
import pool from "./singletons/pool.ts";

async function selectMessages() {
  const results = await pool.query("SELECT * from messages;");
  return results.rows.map(recaseKeys) as object[] as  Message[];
};

export default selectMessages;