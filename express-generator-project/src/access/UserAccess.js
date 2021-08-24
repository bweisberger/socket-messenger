import { pool } from '../databaseUtils/pool';

const UserAccess = {
  getExistingUserRecords() {
    const query = {
      text: 'SELECT name FROM users;',
    }
    return pool.connect().then(client => {
      return client.query(query).then(res => {
        console.log('query result', res);
        client.release();
        return res;
      }).catch(err => {
        client.release()
        console.log(err.stack)
      })
    })
  },

  getExistingUser(name) {
    const query = {
      text: 'SELECT id, name FROM users WHERE name IN ($1);',
      values: [name],
    }
    return pool.connect().then(client => {
      return client.query(query).then(res => {
        console.log('query result', res);
        client.release();
        return res;
      }).catch(err => {
        client.release()
        console.log(err.stack)
      })
    })
  },

  insertNewUser({name}) {
    const query = {
      text: `INSERT INTO users (name) VALUES ($1);`,
      values: [name],
    }
    return pool.connect().then(client => {
      return client.query(query).then(res => {
        console.log('query result', res);
        client.release();
        return res;
      }).catch(err => {
        client.release()
        console.log(err.stack)
      })
    })
  }
}

export default UserAccess;