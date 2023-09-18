import express, { Application } from 'express';
import eventRoute from '../route/event.route';
import conectarDB from '../db/dbMongo';

export default class Server {

  app: Application;
  port: number;
  paths:{ [key: string]: string };

  constructor() {
    this.app = express();
    this.port = 4000;

    this.paths = {
      test: '/api/test',
    };

    this.middlewares();
    this.conectDB();
    this.routes();
  }

  middlewares() {
    this.app.use( express.json() );
  }

  routes() {
    this.app.use(this.paths.test, eventRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: ${this.port}`);
    });
  }

  

  async conectDB() {
    await conectarDB();
  }
}
