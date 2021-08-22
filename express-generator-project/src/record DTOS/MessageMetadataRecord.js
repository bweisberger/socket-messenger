class MessageMetadataRecord {
  constructor(messageId, toUserName, fromUserName, timeSent, timeRead) {
    this.messageId = messageId;
    this.toUserName = toUserName;
    this.fromUserName = fromUserName;
    this.timeSent = timeSent;
    this.timeRead = timeRead;
  }

  static fromNewMessage({ toUser, fromUser, timeSent }) {
    return new MessageMetadataRecord(null, toUser, fromUser, timeSent, null);
  }

  static fromDatabaseRecord({ messageId, toUser, fromUser, timeSent, timeRead }) {
    return new MessageMetadataRecord(messageId, toUser, fromUser, timeSent, timeRead);
  }
}