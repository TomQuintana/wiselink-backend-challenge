import express, { Application } from 'express';
import swaggerJsonDoc from 'swagger-jsdoc';
import swaggerUI, { SwaggerOptions } from 'swagger-ui-express';
import { options } from './doc/swaggerConfig';
import eventRoute from './event/infrastructure/route/event.route';
import userRoute from './user/infrastructure/routes/user.routes';
import conectarDB from './event/infrastructure/db/dbMongo';

export default class Server {

  app: Application;
  port: number;
  paths:{ [key: string]: string };
  spect: SwaggerOptions;

  constructor() {
    this.app = express();
    this.port = 4000;
    this.spect = swaggerJsonDoc(options);

    this.paths = {
      event: '/api/event',
      user: '/api/user',
      docs: '/api/docs',
    };

    this.middlewares();
    this.conectDB();
    this.routes();
  }

  middlewares() {
    this.app.use( express.json() );
    this.app.use(this.paths.docs, swaggerUI.serve, swaggerUI.setup(this.spect));
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
