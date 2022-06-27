import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class Token {
  private _email?: string;
  private _password?: string;
  private _secretKey: string = process.env.SECRET_KEY || 'ebytrKey';

  constructor(email?: string, password?: string) {
    if (email && password) {
      this._email = email;
      this._password = password;
    }
  }

  createdToken = () => {
    try {
      return jwt
        .sign(
          {
            email: this._email,
            password: this._password,
          },
          this._secretKey,
          { expiresIn: '31d' },
        );
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Class Token :', error.message);
      }
    }
  }

  validToken = (token: string) => {
    return jwt.verify(token, this._secretKey);
  }
}