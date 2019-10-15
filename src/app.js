import express from 'express';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    // Devem ser instanciados para poderem ser usados
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
