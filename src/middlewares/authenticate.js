import jwt from 'jsonwebtoken';
import { HttpError } from '../utils/httpError';
import { JWT_KEY } from '../config/vars';
import { ErrorTypes } from '../config/constants';

export const authenticate = (req, res, next) => {
  var token = req.headers['authorization'];
  if (!token)
    throw new HttpError(401, 'No token provided', ErrorTypes.UNAUTHORIZED);

  jwt.verify(token, JWT_KEY, function (err, decoded) {
    if (err)
      throw new HttpError(
        401,
        'Failed to authenticate token',
        ErrorTypes.UNAUTHORIZED
      );
    req.id = decoded.user.id;
    next();
  });
};
