import { Pool } from "npm:pg";
import config from "./config.ts";

const pool = new Pool(config);

export default pool;