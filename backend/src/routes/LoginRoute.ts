import { Router } from "express";

import LoginCtrll from '../controller/LoginCtrll';
import ValidLogin from '../middlewares/ValidLoginMidd';

const ctrll = new LoginCtrll();
const router = Router();

export default router
  .get('/', ValidLogin.validLoginBody, ctrll.checkLogin)
  .post('/', ValidLogin.validLoginRegister, ctrll.createLogin);