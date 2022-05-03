import { createPool } from 'mysql2/promise';
import { config } from './config.js';

const pool = createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { pool };
