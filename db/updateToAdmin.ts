import pool from "./singletons/pool.ts";

async function updateToAdmin(id: string) {
  await pool.query("UPDATE users SET membership_status='admin' WHERE id = $1;", [id]);
};

export default updateToAdmin;