import { Model } from 'mongoose';

import Users from '../database/model/UsersModel';
import IUser from '../database/interface/IUser';
import MockFunciontCreate from './mock/mockUserReturnFunctionCreate';

describe('Test model', () => {
  describe('Test - User model', () => {
    let userModel: Users;
    let mongooseModelMock = {
        create: (user: any) => {
            return {
                ...user,
                _id: {
                    $oid: 'any_id'
                }
            }
        }
    } as Model<IUser>

    beforeEach(() => {
      userModel = new Users(mongooseModelMock);
    });

    describe('Teste - Função created', () => {
      it('Função created de retornar um objeto com _id', async () => {
        const movie = await userModel.create(MockFunciontCreate);
      });
    });
  });
});