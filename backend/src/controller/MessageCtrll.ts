import { Request, Response } from 'express';

import StatusHttp from '../enum/statusHttp';
import Messages from '../enum/messageRes';
import IUser from '../database/interface/IUser';
import Token from '../help/Token';
import MessageServ from '../services/Message';

export default class MessageCtrll {
  // constructor(private messageServ = new MessageServ()) {}

  async setMessageCtrll(req: Request, res: Response) {
    try {
        const { authorization } = req.headers;
        
        if (authorization) {
          const token = new Token();
          token.validToken(authorization);

          const { email } = req.body;
          const messageServ = new MessageServ();

          await messageServ.setMessage(email, req.body);

        return res.status(StatusHttp.OK).json({ message: Messages.UPDATE_SUCCESS });
        }

        return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  }
}