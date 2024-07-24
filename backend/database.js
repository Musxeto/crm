import mysql from 'mysql2/promise';
import config from './config.js';  // Adjust the path if config.js is in a different directory

const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
});

export default pool;
