import { Router } from 'express';

import Login from './LoginRoute';

const routes = Router();

export default routes.use('/login', Login);

