import { recaseKeys } from "@ariel/database-chores";
import User from "../interfaces/User.ts";
import pool from "./singletons/pool.ts";

async function selectUserByUsername(username: string) {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
  return recaseKeys(result.rows[0]) as object as User;
};

export default selectUserByUsername;