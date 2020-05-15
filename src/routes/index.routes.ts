import { Router } from 'express';
import indexController from '../controllers/indexController';

class IndexRoutes {
  public router: Router = Router();
  constructor(){
    this.config();
  }

  config(): void {
    this.router.get('/', indexController.indexStart);
  }
};

const indexRoute = new IndexRoutes();
export default indexRoute.router;