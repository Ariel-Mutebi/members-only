import { recaseKeys } from "@ariel/database-chores";
import User from "../interfaces/User.ts";
import pool from "./singletons/pool.ts";

async function selectUserByID(id: number) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return recaseKeys(result.rows[0]) as object as User;
};

export default selectUserByID;