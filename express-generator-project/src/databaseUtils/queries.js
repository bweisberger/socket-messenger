export const CREATE_MESSAGES_TABLE_QUERY = `
DROP TABLE IF EXISTS messages;
CREATE TABLE messages(
  id SERIAL PRIMARY KEY,
  text TEXT,
  to_user_name VARCHAR(255),
  from_user_name VARCHAR(255),
  time_sent TIMESTAMP,
  time_read TIMESTAMP,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_to_user
    FOREIGN KEY(to_user_name)
      REFERENCES users(name),
  CONSTRAINT fk_from_user
    FOREIGN KEY(from_user_name)
      REFERENCES users(name)
);
`
export const CREATE_USERS_TABLE_QUERY = `
DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id SERIAL,
  name VARCHAR(255) PRIMARY KEY,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
`

export const RANDOM_QUERY = `
DROP TABLE messages
`

