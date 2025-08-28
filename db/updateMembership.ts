import pool from "./singletons/pool.ts";

async function updateMembership(id: string) {
  await pool.query("UPDATE users SET membership_status='member' WHERE id = $1", [id]);
};

export default updateMembership;