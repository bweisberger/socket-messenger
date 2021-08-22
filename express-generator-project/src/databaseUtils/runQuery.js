import { randomQuery } from './queries';
import { pool } from './pool';

(() => {
  randomQuery();
  pool.end();
})();