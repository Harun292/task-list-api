import logger from '../config/logger';

export function httpLogger(request, response, next) {
  logger.info(`${request.method} ${request.path}`);
  next();
}
