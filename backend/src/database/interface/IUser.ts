import IMessageToDoList from './IMessageToDoList';

export default interface User {
  name: string,
  email: string,
  password: string,
  arrMessage?: IMessageToDoList[],
}
