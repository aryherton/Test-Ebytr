import mongoose  from 'mongoose';
import bcrypt from 'bcryptjs';

import UsersModel from '../database/model/UsersModel';
import IUser from '../database/interface/IUser';
import Token from '../help/Token';

export default class User {
  constructor(private userModel = new UsersModel){};

  async getUsers(): Promise<IUser[]> {
    return this.userModel.getAll();
  };

  async getUserByEmail(email: string): Promise<IUser[]> {
    return this.userModel.getByEmail(email);
  };

  async insertUser(user: IUser): Promise<string> {
    const pswd = bcrypt.hashSync(user.password, 10);

    await this.userModel.create({ ...user, password: pswd});
    const token = this.getToken(user.email, user.password);

    return token as string;
  }

  async validUser(email: string, password: string): Promise<string | undefined> {
      const data = await this.getUserByEmail(email);
      const pswd = data[0].password;
      const checkPswd = await bcrypt.compare(password, pswd);

      if (checkPswd) {
        const token = this.getToken(email, password);
        return token as string;
      }
  }

  private getToken(email: string, password: string): string {
    const classToken = new Token(email, password);
    const token = classToken.createdToken();

    return token as string;
  }

  async updateUser(email: string, user: IUser): Promise<void> {
    await this.userModel.update(email, user);
  }
}
