import { pool } from '../databaseUtils/pool';

const MessageAccess = {
  insertMessage({text}) {
    pool.connect().then(client => {
      return client.query(`
        INSERT INTO messages (text) VALUES (${text}) RETURNING id;
      `).then(res => {
        console.log(res);
        client.release();
      }).catch(err => {
        client.release()
        console.log(err.stack)
      })
    })
    pool.end();
  }
}

export default MessageAccess;