import mongoose  from 'mongoose';
import UsersModel from '../database/model/UsersModel';
import IUser from '../database/interface/IUser';

export default class User {
  constructor(private userModel = new UsersModel){};

  async getUsers(): Promise<IUser[]> {
    return this.userModel.getAll();
  };

  async getUserByEmail(email: string): Promise<IUser[]> {
    return this.userModel.getByEmail(email);
  };

  async insertUser(user: IUser): Promise<IUser & { _id: mongoose.Types.ObjectId } > {
    return this.userModel.create(user);
  }

  async validUser(user: Partial<IUser>): Promise<IUser[] | undefined> {
    if (user.email) {
      const userData = this.getUserByEmail(user.email);

      return userData;
    }
  }

  async updateUser(email: string, user: IUser): Promise<void> {
    await this.userModel.update(email, user);
  }
}
