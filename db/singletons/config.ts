import { PoolConfig } from "npm:pg";
import 'jsr:@std/dotenv/load';

const config: PoolConfig = {
  connectionString: Deno.env.get("PG_CONNECTION_STRING"),
  ssl: { rejectUnauthorized: false }
};

export default config;