import UserAccess from '../access/UserAccess';

const UserService = {
  getExistingUsers(toUser, fromUser) {
    const result = UserAccess.getUsers(toUser, fromUser);
    return result.rows.map(row => {
      return {
        id: row.id,
        name: row.name
      }
    })
  }
}

export default UserService;