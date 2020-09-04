import { getUserByEmail } from '../services/db/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { HttpError } from '../utils/httpError';
import { JWT_KEY } from '../config/vars';

export const loginUserController = async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await getUserByEmail(user.email);
    if (newUser[0] === undefined) throw new HttpError(422, 'Incorrect email');
    const passwordsMatch = bcrypt.compareSync(
      user.password,
      newUser[0].password
    );
    if (passwordsMatch) {
      const token = jwt.sign({ user: newUser[0] }, JWT_KEY);
      res.send({ token: token, user: newUser[0] });
    } else throw new HttpError(422, 'Wrong password provided');
  } catch (error) {
    next(error);
  }
};
