import { Schema } from 'mongoose';

import IUser from '../interface/IUser';

export default new Schema<IUser>(
  {
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    arrMessage: [{id: Number, description: String, status: String}]
  });