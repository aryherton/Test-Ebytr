import joi from 'joi';

import IUser from '../database/interface/IUser';

export default class Joi {
  static validReqBodyLogin = (obj: Partial<IUser>) => joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(7).required(),
  }).validate(obj).error;

  static validReqBodyRegister = (obj: Partial<IUser>) => joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(7).required(),
  }).validate(obj).error;
}