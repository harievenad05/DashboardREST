import { Request, Response } from 'express';
import pool from '../utils/database';

class CustomerController {

    //Get All Customers
    public async getAllCustomers(req: Request, res: Response): Promise<void> {
        await pool.query('SELECT * FROM customer', (err, result, field) => {
            if (err) throw err;
            res.status(200).json({ success: 1, message: 'success', data: result });
        })
    };

    //Get Customer by ID
    public async getCustomerById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('SELECT * FROM customer WHERE customer_id = ?', [id], (err, result, field) => {
            if (err) throw err;
            if (result.length > 0) {
                return res.status(200).json({ success: 1, message: 'success', data: result });
            } else {
                return res.status(403).json({ success: 0, message: 'No record found' });
            }
        });
    };

    //Create new customer
    public async newCustomer(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO customer set ?', [req.body], (err, result, field) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                return res.status(200).json({ success: 1, message: 'Customer created successfully' });
            } else {
                return res.status(403).json({ success: 0, message: 'wrong params' });
            }
        });
    };

    //Edit or update customer
    public async updateCustomer(req: Request, res: Response): Promise<void> {
        let sql = "UPDATE customer SET name='" + req.body.name + "', email='" + req.body.email + "', state='" + req.body.state + "'  WHERE customer_id=" + req.params.id;
        await pool.query(sql, (err, result, field) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                return res.status(200).json({ success: 1, message: 'Customer updated successfully' })
            } else {
                return res.status(403).json({ success: 0, message: 'No record found' });
            }
        });
    };

    //Delete customer
    public async deleteCustomer(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM customer WHERE customer_id = ?', [id], (err, result, field) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                return res.status(200).json({ success: 1, message: 'Customer deleted successfully' });
            } else {
                return res.status(403).json({ success: 0, message: 'No record found' });
            }
        });
    };

};

const customerController = new CustomerController();
export default customerController;