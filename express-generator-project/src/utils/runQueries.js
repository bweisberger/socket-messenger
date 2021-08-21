import { createTables } from './queries';
import { pool } from '../models/pool';

(() => {
  createTables();
  pool.end();
})();