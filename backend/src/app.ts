import express from 'express';
import cors from 'cors';

import connection from './database/model/Connections';
import router from './routes';

export default class App {
  app: express.Express;
  connect: Promise<typeof import('mongoose')>;

  constructor () {
    this.app = express();
    // this.middleware();
    this.routes();
    this.connect = connection();
  }

  // private middleware() {
  //   this.app.use(express.json);
  // }

  private routes() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
  }

  start(port: number | string) {
    this.app.listen(port, () => console.log('Listening at the door: ', port));
  }
}