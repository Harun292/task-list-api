import User from '../../models/User';

export const dbGetAllUsers = async () => {
  return User.query();
};
export const createUser = async user => {
  const newUser = await User.query().insert({
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  return newUser;
};
export const getUserByEmail = async email => {
  const userInDb = await User.query().where('email', email);
  return userInDb;
};
