class MessageRecord {
  constructor(messageText) {
    this.text = messageText;
  }

  static from({ message }) {
    return new MessageRecord(message);
  }
}

export default MessageRecord;