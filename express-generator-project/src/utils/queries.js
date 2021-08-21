import { pool } from "../models/pool"

const QUERY_CREATE_MESSAGE_METADATA_TABLE = `
DROP TABLE IF EXISTS message_metadata;
CREATE TABLE message_metadata (
  id SERIAL PRIMARY KEY,
  message_id INT,
  to_user_id INT,
  from_user_id INT,
  sent_time TIMESTAMP,
  read_time TIMESTAMP,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_message
    FOREIGN KEY(message_id)
      REFERENCES messages(id),
  CONSTRAINT fk_to_user
    FOREIGN KEY(to_user_id)
      REFERENCES users(id),
  CONSTRAINT fk_from_user
    FOREIGN KEY(from_user_id)
      REFERENCES users(id)
);
`
export const createTables = () => {
  pool
    .connect()
    .then(client => {
      return client
        .query(QUERY_CREATE_MESSAGE_METADATA_TABLE)
        .then(res => {
          client.release();
          console.log(res)
        })
        .catch(err => {
          client.release()
          console.log(err.stack)
        })
    })
}


// export const createMessageMetadataTable = () => {
//   return client.connect((err) => {
//     if(err) {
//       return console.error('could not connect to postgres', err);
//     }
//     return client.query(QUERY_CREATE_MESSAGE_METADATA_TABLE, (err, result) => {
//       if(err) {
//         return console.error('error running query', err);
//       }
//       console.log(result);
//       client.end();
//     });
//   });
// }

const QUERY_CREATE_MESSAGES_TABLE = `
DROP TABLE IF EXISTS messages;
CREATE TABLE messages(
  id SERIAL PRIMARY KEY,
  text TEXT,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
`

export const createMessagesTable = () => {
  return client.connect((err) => {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    return client.query(QUERY_CREATE_MESSAGES_TABLE, (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
    });
  });
};

const QUERY_CREATE_USERS_TABLE = `
DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
`
export const createUsersTable = () => {
  return client.connect((err) => {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    return client.query(QUERY_CREATE_USERS_TABLE, (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
    });
  });
}

export const randomQuery = () => {
  client.connect((err) => {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query(`DROP TABLE message_metadata; DROP TABLE users; DROP TABLE messages;`, (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
    });
  });
}