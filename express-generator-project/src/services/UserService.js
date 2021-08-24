import UserAccess from '../access/UserAccess';
import User from '../domain/User';

const UserService = {
  getAllExistingUserNames: async () => {
    const result = await UserAccess.getExistingUserRecords();
    if (!result.rows.length) {
      throw new Error(`No users exist`)
    }
    return result.rows.map(row => row.name)
  },

  isExistingUser: async (userName) => {
    const result = await UserAccess.getExistingUser(userName);
    if (result.rows.length) {
      return true;
    }
    return false;
  },

  createNewUser: async (json) => {
    const newUser = User.fromJsonInput(json);
    UserAccess.insertNewUser(newUser);
  }
}

export default UserService;