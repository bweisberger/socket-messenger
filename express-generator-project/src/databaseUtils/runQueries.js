import { createTables } from './queries';
import { pool } from './pool';

(() => {
  createTables();
  pool.end();
})();