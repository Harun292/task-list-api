import bcrypt from 'bcryptjs';
import { SALT_ROUNDS } from '../config/constants';

export default async function generateHashPassword(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
