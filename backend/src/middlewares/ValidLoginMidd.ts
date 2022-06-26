import { Request, Response, NextFunction } from 'express';

import Joi from '../help/Joi';
import StatusHttp from '../enum/statusHttp';
import Messages from '../enum/messageRes';

export default class ValidLogin {
  static validLoginBody(req: Request, res: Response, next: NextFunction){
    try {
        const { email, password } = req.body;
        const erro = Joi.validReqBodyLogin({ email, password });
        
        if (erro) {
            return res.status(StatusHttp.BAD_REQUEST).json({ message: erro.message});
        }
        next();
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
   }

   static validLoginRegister(req: Request, res: Response, next: NextFunction){
    try {
        const { name, email, password } = req.body;
        const erro = Joi.validReqBodyRegister({ name, email, password });
        
        if (erro) {
            return res.status(StatusHttp.BAD_REQUEST).json({ message: erro.message});
        }
        next();
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
   }
}