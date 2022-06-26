import { Router } from 'express';

import Login from './LoginRoute';
import Message from './MessageRoute';

const routes = Router();

export default routes
  .use('/login', Login)
  .use('/message', Message);

