// import { NextFunction, request, Request, Response } from 'express';

// import Token from '../help/Token';
// import StatusHttp from '../enum/statusHttp';
// import Messages from '../enum/messageRes';

// export default class TokenMidd {
//   createdToken(req: Request, res: Response, next: NextFunction){
//     try {
//         const { email, password } = req.body;
//         const token = new Token(email, password);
        
//         return token.createdToken();
//     } catch(e) {
//         console.log(e);
//         return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
//     }
//    }
// }