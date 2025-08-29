import pool from "./singletons/pool.ts";

async function deleteMessageInDatabase(id: string) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
};

export default deleteMessageInDatabase;