const MessageMetadataAccess = {
  insertMetadata({messageId, toUserName, fromUserName, timeSent, timeRead}) {
    pool.connect().then(client => {
      return client.query(`
        INSERT INTO messages 
        (message_id, to_user_name, from_user_name, time_sent, time_read) 
        VALUES (${messageId}, ${toUserName}, ${fromUserName}, ${timeSent}, ${timeRead});
      `).then(res => {
        console.log(res);
        client.release();
      })
    })
  }
}