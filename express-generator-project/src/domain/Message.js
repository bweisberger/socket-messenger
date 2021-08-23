import UserService from '../services/UserService';

class Message {
  constructor(messageJson) {
    this.messageJson = messageJson;
    this.validateFieldsOrGetError();
    const { message, toUser, fromUser, timeSent } = messageJson
    this.text = message;
    this.toUser = toUser;
    this.fromUser = fromUser;
    this.timeSent = timeSent;
    this.timeRead = null;
  };

  validateFieldsOrGetError() {
    this.validateExpectedFieldsExist();
    // this.validateUsersExist().catch(err => {
    //   this.validationError = err
    // });
    if (this.validationError) {
      return false;
    }
    return true;

  };

  validateExpectedFieldsExist() {
    const expectedFields = ['message', 'toUser', 'fromUser', 'timeSent'];
    let invalidField;
    expectedFields.forEach(field => {
      if (!this.messageJson[field]) {
        invalidField = field;
      }
    });
    if (invalidField) {
      throw new Error(`Message is missing field: ${invalidField}.`);
    }
  };

  validateUsersExist = async () => {
    const users = await UserService.getExistingUsers(this.messageJson.toUser, this.messageJson.fromUser);
    if (users.length < 2 && this.messageJson.toUser !== this.messageJson.fromUser) {
      const missingUserName = this.getUserNameNotInDatabase(users);
      return new Error(`User does not exist: ${missingUserName}`)
    }
  };
  
  getUserNameNotInDatabase = (users) => {
    const { toUser, fromUser } = this.messageJson;
    const userNames = users.map(user => user.name);
    if (!userNames.includes(toUser)) {
      return toUser;
    } else if (!userNames.includes(fromUser)) {
      return fromUser;
    } else if (userNames.includes(toUser) && userNames.includes(fromUser)) {
      return `Something's wrong. Both names exist in database: toUser: ${toUser}, fromUser: ${fromUser}`;
    } else {
      'You have a bug my friend.'
    }
  }

}
export default Message;