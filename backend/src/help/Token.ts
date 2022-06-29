import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'ebytrKey';

export default class Token {
  static createdToken = (email: string, password: string) => {
    try {
      return jwt
        .sign(
          {
            email,
            password,
          },
          SECRET_KEY,
          { expiresIn: '31d' },
        );
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Class Token :', error.message);
      }
    }
  }

  static validToken = (token: string) => {
    return jwt.verify(token, SECRET_KEY);
  }
}