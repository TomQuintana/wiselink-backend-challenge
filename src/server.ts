import express, { Application } from 'express';
import eventRoute from './event/infrastrucutre/route/event.route';
import userRoute from './user/infrastructure/routes/user.routes';
import conectarDB from './event/infrastrucutre/db/dbMongo';

export default class Server {

  app: Application;
  port: number;
  paths:{ [key: string]: string };

  constructor() {
    this.app = express();
    this.port = 4000;

    this.paths = {
      event: '/api/event',
      user: '/api/user',
    };

    this.middlewares();
    this.conectDB();
    this.routes();
  }

  middlewares() {
    this.app.use( express.json() );
  }

  routes() {
    this.app.use(this.paths.event, eventRoute);
    this.app.use(this.paths.user, userRoute);
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
