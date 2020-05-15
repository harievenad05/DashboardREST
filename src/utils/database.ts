import mysql from 'mysql';
import config from './config';

const pool = mysql.createPool(config.database);
pool.getConnection((err, conn) => {
  if (err) throw err;
  conn.release();
  console.log('DB is connected');
});

export default pool;

