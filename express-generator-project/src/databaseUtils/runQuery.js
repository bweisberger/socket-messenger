import { randomQuery } from './queryFunctions';
import { pool } from './pool';

(() => {
  randomQuery();
  pool.end();
})();