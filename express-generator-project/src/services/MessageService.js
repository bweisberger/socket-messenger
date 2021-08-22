import { pool } from '../databaseUtils/pool'
import MessageRecord from '../record DTOS/MessageRecord';
import MessageMetadataRecord from '../record DTOS/MessageMetadataRecord';

const MessageService = {
  submit(message) {
    const savedMessageId = this.saveMessage(message);
    this.saveMetadataWithId(message, savedMessageId);
  },
  
  saveMessage(message) {
    const record = MessageRecord.from(message);
    return MessageAccess.insertMessage(record);
  },

  saveMetadataWithId(message, savedMessageId) {
    const record = MessageMetadataRecord.fromNewMessage(message);
    record.messageId = savedMessageId;
    MessageMetadataAccess.insertMetadata(record);
  }
    
}

export default MessageService;