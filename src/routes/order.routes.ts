import { Router } from 'express';
import orderController from '../controllers/orderController';

class OrderRoute {
  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    this.router.get('/order', orderController.getAllOrders);
    this.router.get('/orders', orderController.getAllOrdersWithCustomer);
    this.router.get('/order/:id', orderController.getOrderById);
    this.router.post('/order', orderController.newOrder);
    this.router.put('/order/:id', orderController.updateOrder);
    this.router.delete('/order/:id', orderController.deleteOrder);
  }

}

const orderRoute = new OrderRoute();
export default orderRoute.router;