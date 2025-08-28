import Message from "../interfaces/Message.ts";
import pool from "./singletons/pool.ts";

async function insertMessage(message: Message) {
  const { title, body, author } = message;

  await pool.query(
    "INSERT INTO messages(title, body, author) VALUES ($1, $2, $3)",
    [title, body, author]
  );
};

export default insertMessage;