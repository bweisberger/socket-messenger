import { pool } from '../databaseUtils/pool';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client ${client}`);
  }

  select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table} `;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  insert(query) {
    return this.pool.query(query);
  }
}

export default Model;