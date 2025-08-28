import Message from "../interfaces/Message.ts";
import pool from "./singletons/pool.ts";

async function insertMessage(message: Message) {
  const { title, body, postedBy } = message;

  await pool.query(
    "INSERT INTO messages(title, body, posted_by) VALUES ($1, $2, $3)",
    [title, body, postedBy]
  );
};

export default insertMessage;