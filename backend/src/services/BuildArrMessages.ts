import UsersModel from '../database/model/UsersModel';
import IUser from '../database/interface/IUser';
import IMessage from '../database/interface/IMessage';

export default class BuildArrMessagens {
  constructor(private userModel = new UsersModel()) {}

  async insertMessageArr(email: string, message: IMessage) {
    const [ { arrMessage } ] = await this.userModel.getByEmail(email);

    arrMessage?.push(message);

    return arrMessage;
  }
}