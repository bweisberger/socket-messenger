import { createTables } from './queryFunctions';
import { pool } from './pool';

(() => {
  createTables();
  pool.end();
})();