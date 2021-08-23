import UserAccess from "../access/UserAccess";

class User {
  constructor(name) {
    this.name = name;
  }
  
  static fromJsonInput({name}) {
    if (!(name && isValidName(name))) {
      throw new Error('Name must have at least one non-whitespace character');
    }
    validateUserDoesNotExist(name);
    return new User(name);
  }

  static fromDatabase({id, name}) {
    return new User(name);
  }
}

const isValidName = (name) => {
  // name has any non-whitespace characters
  return /\S/.test(name)
}

const validateUserDoesNotExist = (name) => {
  const existingUser = UserAccess.getExistingUser(name);
  if (existingUser) {
    // throw new Error(`A user with name ${name} already exists`);
  }
}

export default User;