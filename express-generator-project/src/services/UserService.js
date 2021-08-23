import UserAccess from '../access/UserAccess';
import User from '../domain/User';

const UserService = {
  getExistingUsers: async (toUser, fromUser) => {
    const result = await UserAccess.getExistingUserRecords(toUser, fromUser);
    if (!result.rows) {
      throw new Error(`No users exist with names: ${toUser}, ${fromUser}`)
    }
    return result.rows.map(row => {
      return {
        id: row.id,
        name: row.name
      }
    })
  },

  createNewUser: async (json) => {
    const newUser = User.fromJsonInput(json);
    UserAccess.insertNewUser(newUser);
  }
}

export default UserService;