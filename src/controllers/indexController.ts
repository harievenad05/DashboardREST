import {Request, Response} from 'express';

class IndexController {

  indexStart(req: Request, res: Response){
    res.status(200).json({message: 'Hello from Index'});
  };

};

const indexController = new IndexController();
export default indexController;