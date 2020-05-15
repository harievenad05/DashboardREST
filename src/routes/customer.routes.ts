import { Router } from 'express';
import customerController from '../controllers/customerController';

class CustomerRoute {
  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    this.router.get('/customer', customerController.getAllCustomers);
    this.router.get('/customer/:id', customerController.getCustomerById);
    this.router.post('/customer', customerController.newCustomer);
    this.router.put('/customer/:id', customerController.updateCustomer);
    this.router.delete('/customer/:id', customerController.deleteCustomer);
  }

}

const customerRoute = new CustomerRoute();
export default customerRoute.router;