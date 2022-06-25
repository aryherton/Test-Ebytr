import mongoose from 'mongoose';

import UsersSchemas from '../schemas/users';
import IUser from '../interface/IUser';
import users from '../schemas/users';

// export default model<IUser[]>('EBYTR', UsersSchemas);

export default class UserModel {
  constructor(
    private model = mongoose.model('users', UsersSchemas)
  ){}

  async create(user: IUser): Promise<IUser & { _id: mongoose.Types.ObjectId }>{
    return this.model.create(user);
  }

  async getAll(): Promise<IUser[]> {
    return this.model.find();
  }

  async getByEmail(email: string): Promise<(IUser & { _id: mongoose.Types.ObjectId }) | unknown> {
    return this.model.find({ email });
  }

//   async updateMessage(email: string, user: Partial<IUser>): Promise<void> {
//     await this.model.updateOne({ email }, user);
//   }
}