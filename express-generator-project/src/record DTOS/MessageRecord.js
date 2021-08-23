class MessageRecord {
  constructor(text, toUserName, fromUserName, timeSent, timeRead) {
    this.text = text;
    this.toUserName = toUserName;
    this.fromUserName = fromUserName;
    this.timeSent = timeSent;
    this.timeRead = timeRead;
  }

  static fromNewMessage({ text, toUser, fromUser, timeSent }) {
    return new MessageRecord(text, toUser, fromUser, timeSent, null);
  }

  static fromDatabase({ text, toUser, fromUser, timeSent, timeRead }) {
    return new MessageRecord(text, toUser, fromUser, timeSent, timeRead);
  }
}

export default MessageRecord;