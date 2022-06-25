import { Router } from "express";
import LoginCtrll from '../controller/LoginCtrll';

const ctrll = new LoginCtrll();
const router = Router();

export default router
  .get('/', ctrll.checkLogin)
  .post('/', ctrll.createLogin);