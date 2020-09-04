//import dotenv from 'dotenv';
//import path from 'path';

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

// // app
// export const env = process.env.NODE_ENV;
// export const port = process.env.PORT;
//
// // Database
// export const dbUri = process.env.DB_URL;
// export const testDbUri = process.env.TEST_DB_URL;
//
// // Cors
// export const corsWhitelist = process.env.CORS_WHITELIST.split(' ');

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUri: process.env.DB_URL,
  testDbUri: process.env.TEST_DB_URL,
  corsWhitelist: process.env.CORS_WHITELIST.split(' '),
  JWT_KEY: process.env.JWT_KEY,
};
