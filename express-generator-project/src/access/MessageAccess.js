import { pool } from '../databaseUtils/pool';

const MessageAccess = {
  insertMessage({text, toUserName, fromUserName, timeSent, timeRead}) {
    pool.connect().then(client => {
      return client.query(`
        INSERT INTO messages 
        (text, to_user_name, from_user_name, time_sent, time_read) 
        VALUES (${text}, ${toUserName}, ${fromUserName}, ${timeSent}, ${timeRead});
      `).then(res => {
        console.log("message successfully written to database", res);
        client.release();
      }).catch(err => {
        client.release()
        console.log(err)
      })
    })
    pool.end();
  },

  getNewMessagesForUser(name) {
    const query = {
      text: `SELECT text, to_user_name, from_user_name, time_sent, time_read 
      FROM messages 
      WHERE to_user_name = $1
      AND time_read IS NULL
      `,
      values: [name],
    }
    return pool.connect().then(client => {
      return client.query(query).then(res => {
        if (res.rows.length) {
          console.log(`found new messages for user ${name}: ${res.rows}`);
        }
        client.release();
        return res;
      }).catch(err => {
        client.release();
        console.log(err);
        return err;
      })
    })
  },

  updateMessageWithTimeRead({text, toUser, fromUser, timeSent}, timeRead) {
    const query = {
      text: `UPDATE messages
      SET time_read =  $1
      WHERE text = $2
      AND to_user_name = $3
      AND from_user_name = $4 
      AND time_sent = $5
      AND time_read IS NULL
      `,
      values: [timeRead, text, toUser, fromUser, timeSent],
    }
    return pool.connect().then(client => {
      return client.query(query).then(res => {
        if (res.rows.length) {
          console.log(`Added timeRead to new message for ${toUser}: ${timeRead}`);
        }
        client.release();
        return res;
      }).catch(err => {
        client.release();
        console.log(err);
        return err;
      })
    })
  }
}

export default MessageAccess;