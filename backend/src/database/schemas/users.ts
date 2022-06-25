import { Schema } from 'mongoose';

import IUsers from '../interface/IUsers';

export default new Schema<IUsers>(
  {
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    arrMessage: [{id: Number, description: String, status: String}]
  });