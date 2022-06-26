import { Request, Response } from 'express';

import UserService from '../services/User';
import StatusHttp from '../enum/statusHttp';
import MessagesRes from '../enum/messageRes';

export default class LoginCtrll {
  constructor(private userServ = new UserService()) {}

  createLogin = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password } = req.body;
      const checkEmail = await this.userServ.getUserByEmail(email);

      if (checkEmail.length) {
        return res.status(StatusHttp.UNAUTHORIZED).json({ message: MessagesRes.ALREADY_REGISTERED });
      }
      const token = await this.userServ.insertUser({ name, email, password });

      return res.status(StatusHttp.CREATED).json({ message: MessagesRes.LOGIN_SUCCESS, token });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: MessagesRes.ERROR_SERVER });
    }
  }

 checkLogin =  async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;
        const token = await this.userServ.validUser(email, password);

        if (token) {
          return res.status(StatusHttp.OK).json({ message: MessagesRes.LOGIN_SUCCESS, token });
        }

      return res.status(StatusHttp.UNAUTHORIZED).json({ message: MessagesRes.INCORRECT });
    } catch(e) {
      console.log(e);
      return res.status(StatusHttp.SERVER_ERROR).json({ message: MessagesRes.ERROR_SERVER});
    }
  }
}