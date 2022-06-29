import { Request, Response } from 'express';

import BuildArrMessagens from '../services/BuildArrMessages';
import StatusHttp from '../enum/statusHttp';
import Messages from '../enum/messageRes';
import IUser from '../database/interface/IUser';
import IMessage from '../database/interface/IMessage';
import Token from '../help/Token';
import MessageServ from '../services/Message';
import { JwtPayload } from 'jsonwebtoken';

export default class MessageCtrll {
  // constructor(private messageServ = new MessageServ()) {}

  async setMessageCtrll(req: Request, res: Response) {
    try {
        const { authorization } = req.headers;
        const message: IMessage = req.body.message;
        
        if (authorization) {
          const user = Token.validToken(authorization) as JwtPayload;
          const messageServ = new MessageServ();
          const buildArrMess = new BuildArrMessagens();
          const arrMessage: IMessage[] = await buildArrMess
            .insertMessageArr(user.email, message) as IMessage[];

          await messageServ.setMessage(user.email, arrMessage);

        return res.status(StatusHttp.OK).json({ message: Messages.UPDATE_SUCCESS });
        }

        return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  }

  async getMessageCtrll(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;

      if (authorization) {
        const user = Token.validToken(authorization) as JwtPayload;
        const messageServ = new MessageServ();
        const arrMessage = await messageServ.getMessage(user.email);

        return res.status(StatusHttp.OK).json({ arrMessage });
      }

      return res.status(StatusHttp.OK).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
      console.log(e);
    }
  }
}