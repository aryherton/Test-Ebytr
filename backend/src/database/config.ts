import dotenv from 'dotenv';

dotenv.config();

export default {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
  autoIndex: false,
  dbName: process.env.MONGO_DB_CONTAINER,
};