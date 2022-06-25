import mongoose from 'mongoose';

import UsersSchemas from '../schemas/users';
import IUsers from '../interface/IUsers';
import users from '../schemas/users';

// export default model<IUsers[]>('EBYTR', UsersSchemas);

export default class UserModel {
  constructor(
    private model = mongoose.model('users', UsersSchemas)
  ){}

  async create(user: IUsers): Promise<IUsers & { _id: mongoose.Types.ObjectId }>{
    return this.model.create(user);
  }

  async getAll(): Promise<IUsers[]> {
    return this.model.find();
  }

  async getByEmail(email: string): Promise<(IUsers & { _id: mongoose.Types.ObjectId }) | unknown> {
    return this.model.find({ email });
  }

//   async updateMessage(email: string, user: Partial<IUsers>): Promise<void> {
//     await this.model.updateOne({ email }, user);
//   }
}