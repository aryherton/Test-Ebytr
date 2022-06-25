import { Request, Response } from 'express';

import UserService from '../services/User';
import StatusHttp from '../enum/statusHttp';
import MessagesRes from '../enum/messageRes';

export default class LoginCtrll {
  constructor(private userSerc = new UserService()) {}

  createLogin = async (req: Request, res: Response): Promise<Response> => {
    try {
      if (req.body) {
      const user = await this.userSerc.insertUser(req.body);

      return res.status(StatusHttp.OK).json({ message: MessagesRes.LOGIN_SUCCESS });
      }

      return res.status(StatusHttp.NOT_FOUND).json({ message: MessagesRes.BODY_IS_REQUIRED });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: MessagesRes.ERROR_SERVER });
    }
  }

 checkLogin =  async (req: Request, res: Response): Promise<Response> => {
    try {
      if (req.body) {
        const checkUser = await this.userSerc.validUser(req.body);
      }

      return res.status(StatusHttp.NOT_FOUND).json({ message: MessagesRes.BODY_IS_REQUIRED });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: MessagesRes.ERROR_SERVER});
    }
  }
}