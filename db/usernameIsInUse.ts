import pool from "./singletons/pool.ts";

async function usernameIsInUse(username: string) {
  const result = await pool.query("SELECT EXISTS (SELECT 1 FROM users WHERE username = $1);", [username]);
  return result.rows[0].exists as boolean;
};

export default usernameIsInUse;