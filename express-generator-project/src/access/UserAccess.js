

const UserAccess = {
  getExistingUserRecords(toUser, fromUser) {
    let result;
    const query = {
      text: 'SELECT id, name FROM users WHERE name IN ($1, $2);',
      values: [toUser, fromUser],
    }
    pool.connect().then(client => {
      return client.query(query).then(res => {
        console.log(res);
        result = res;
        client.release();
      }).catch(err => {
        client.release()
        console.log(err.stack)
      })
    })
    pool.end(); 
    return result;
  }
}

export default UserAccess;