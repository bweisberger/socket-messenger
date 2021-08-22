import { HttpError } from "http-errors";

class Message {
  constructor(messageJson) {
    this.messageJson = messageJson;
    this.validateFields();
    const { message, toUser, fromUser, timeSent } = messageJson
    this.message = message;
    this.toUser = toUser;
    this.fromUser = fromUser;
    this.timeSent = timeSent
  };

  validateFields() {
    this.checkExpectedFieldsExist();
    this.checkUsersExist();
  };

  checkExpectedFieldsExist() {
    const expectedFields = ['message', 'toUser', 'fromUser', 'timeSent'];
    expectedFields.forEach(field => {
      if (!this.messageJson[field]) {
        throw new Error(`Message is missing field: ${field}.`);
      }
    });
  };

  checkUsersExist() {
    const users = UserService.getExistingUsers(this.messageJson.toUser, this.messageJson.fromUser);
    if (users.length < 2 && this.messageJson.toUser !== this.messageJson.fromUser) {
      const missingUserName = this.findUserNameNotInDatabase(users);
      throw new Error(`User does not exist: ${missingUser}`)
    }
  };
  
  findUserNameNotInDatabase = (users) => {
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