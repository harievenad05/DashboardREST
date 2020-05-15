import { Request, Response } from 'express';
import pool from '../utils/database';

class OrderController {

    //Get All Orders
    public async getAllOrders(req: Request, res: Response): Promise<void> {
        await pool.query('SELECT * FROM orders', (err, result, field) => {
            if (err) throw err;
            res.status(200).json({ success: 1, message: 'success', data: result });
        })
    };

    //Get Order with customer name
    public async getAllOrdersWithCustomer(req: Request, res: Response): Promise<void> {
        await pool.query('SELECT orders.order_id, customer.customer_id, customer.name, orders.total, orders.placed, orders.completed, orders.status FROM customer, orders WHERE customer.customer_id = orders.customer_id', (err, result, field) => {
            if (err) throw err;
            res.status(200).json({ success: 1, message: 'success', data: result });
        })
    };

    //Get Order by ID
    public async getOrderById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('SELECT * FROM orders WHERE order_id = ?', [id], (err, result, field) => {
            if (err) throw err;
            if (result.length > 0) {
                return res.status(200).json({ success: 1, message: 'success', data: result });
            } else {
                return res.status(403).json({ success: 0, message: 'No record found' });
            }
        });
    };

    //Create new Order
    public async newOrder(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO orders set ?', [req.body], (err, result, field) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                return res.status(200).json({ success: 1, message: 'Order created successfully' });
            } else {
                return res.status(403).json({ success: 0, message: 'wrong params' });
            }
        });
    };

    //Edit or update Order
    public async updateOrder(req: Request, res: Response): Promise<void> {
        let sql = "UPDATE orders SET customer_id='" + req.body.customer_id + "', total='" + req.body.total + "', placed='" + req.body.placed + "', completed='" + req.body.completed + "', , status='" + req.body.status + "'  WHERE order_id=" + req.params.id;
        await pool.query(sql, (err, result, field) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                return res.status(200).json({ success: 1, message: 'Order updated successfully' })
            } else {
                return res.status(403).json({ success: 0, message: 'No record found' });
            }
        });
    };

    //Delete Order
    public async deleteOrder(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM orders WHERE order_id = ?', [id], (err, result, field) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                return res.status(200).json({ success: 1, message: 'Order deleted successfully' });
            } else {
                return res.status(403).json({ success: 0, message: 'No record found' });
            }
        });
    };

};

const orderController = new OrderController();
export default orderController;