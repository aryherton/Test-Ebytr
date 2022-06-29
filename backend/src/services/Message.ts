import UsersModel from '../database/model/UsersModel';
import IMessage from '../database/interface/IMessage';

export default class Message {
  constructor(private userModel = new UsersModel()){}

 async setMessage(email: string, arrMessage: IMessage[]) {
  await this.userModel.updateMessage(email, arrMessage);
 }

 async getMessage(email: string) {
  const [ user ] = await this.userModel.getByEmail(email);
  
  return user.arrMessage;
 }
}