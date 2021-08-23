import Message from '../domain/Message';
import MessageRecord from '../record DTOS/MessageRecord';
import MessageAccess from '../access/MessageAccess';

const MessageService = {
  messagePollingInterval: null,
  submit(messageJson) {
    const newMessage = new Message(messageJson);
    this.saveMessage(newMessage);
  },

  saveMessage(newMessage) {
    const record = MessageRecord.fromNewMessage(newMessage);
    MessageAccess.insertMessage(record);
  },

  getUserMessages(toUser, fromUser) {
    const result = MessageAccess.getMessagesForUsers(toUser, fromUser);
    console.log(result, "<----result in getUserMessages");
    return result.rows.map(row => {
      MessageRecord.fromDatabase(row);
    })
  },

  getNewMessagesForUser: async (toUser) => {
    let newMessages = [];
    const result = await MessageAccess.getNewMessagesForUser(toUser);
      if (result.rows.length){
        newMessages = result.rows.map(row => {
          MessageRecord.fromDatabase(row);
        })
      }
    if (newMessages.length) {
      newMessages.forEach(message => {
        MessageAccess.updateMessageWithTimeRead(message, Date.now());
      })
    }
    return newMessages;
  }
    
}

export default MessageService;