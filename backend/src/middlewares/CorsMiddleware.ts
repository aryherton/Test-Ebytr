import { Request, Response, NextFunction } from 'express';

export default class CorsMiddleware {
  constructor(_req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  }
}