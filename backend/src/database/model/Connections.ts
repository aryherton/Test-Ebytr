import { connect } from 'mongoose';

import options from '../config';

export default (url: string = 'mongodb://localhost:27017/Ebytr') => connect(url, options);
