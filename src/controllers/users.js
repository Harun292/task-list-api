import generateHashPassword from '../utils/generate.hash';
import { createUser } from '../services/db/users';

export const createUserController = async (req, res, next) => {
  try {
    const user = req.body;
    const hashedPassword = await generateHashPassword(user.password);
    user.password = hashedPassword;
    const newUser = await createUser(user);
    res.status(201).send(newUser);
  } catch (error) {
    next(error);
  }
};
