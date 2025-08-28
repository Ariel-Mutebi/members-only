import { hash } from "bcryptjs";
import pool from "./singletons/pool.ts";
import User from "../interfaces/User.ts";

async function insertUser(user: User) {
  const { firstName, lastName, username, password } = user;
  const hashedPassword = await hash(password, 10);

  await pool.query(
    `INSERT INTO users(first_name, last_name, username, password, membership_status)
    VALUES ($1, $2, $3, $4, 'non-member');`,
    [firstName, lastName, username, hashedPassword]
  );
};

export default insertUser;