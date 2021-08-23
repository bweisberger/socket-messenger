import { pool } from "./pool"
import { 
  CREATE_USERS_TABLE_QUERY,
  CREATE_MESSAGES_TABLE_QUERY,
  RANDOM_QUERY,
} from './queries';

export const createTables = () => {
  pool
    .connect()
    .then(client => {
      return client
        .query(CREATE_MESSAGES_TABLE_QUERY)
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



export const randomQuery = () => {
  pool
    .connect()
    .then(client => {
      return client
        .query(RANDOM_QUERY)
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