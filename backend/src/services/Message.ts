import UsersModel from '../database/model/UsersModel';
import IUser from '../database/interface/IUser';

export default class Message {
  constructor(private userModel = new UsersModel()){}

 async setMessage(email: string, user: Partial<IUser>) {
  await this.userModel.update(email, user);
 }
}