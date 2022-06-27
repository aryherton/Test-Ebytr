import IMessage from './IMessage';

export default interface User {
  name: string,
  email: string,
  password: string,
  arrMessage?: IMessage[],
}
