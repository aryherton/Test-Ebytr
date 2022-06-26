import { Request, Response } from 'express';

import StatusHttp from '../enum/statusHttp';
import Messages from '../enum/messageRes';
import IUser from '../database/interface/IUser';
import MessageServ from '../services/Message';

export default class MessageCtrll {
  // constructor(private messageServ = new MessageServ()) {}

  async setMessageCtrll(req: Request, res: Response) {
    try {
        const { email } = req.body;
        const messageServ = new MessageServ();
        await messageServ.setMessage(email, req.body);

        return res.status(StatusHttp.OK).json({ message: Messages.UPDATE_SUCCESS });
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  }
}