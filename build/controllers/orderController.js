"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../utils/database"));
class OrderController {
    //Get All Orders
    getAllOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM orders', (err, result, field) => {
                if (err)
                    throw err;
                res.status(200).json({ success: 1, message: 'success', data: result });
            });
        });
    }
    ;
    //Get Order with customer name
    getAllOrdersWithCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT orders.order_id, customer.customer_id, customer.name, orders.total, orders.placed, orders.completed, orders.status FROM customer, orders WHERE customer.customer_id = orders.customer_id', (err, result, field) => {
                if (err)
                    throw err;
                res.status(200).json({ success: 1, message: 'success', data: result });
            });
        });
    }
    ;
    //Get Order by ID
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM orders WHERE order_id = ?', [id], (err, result, field) => {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.status(200).json({ success: 1, message: 'success', data: result });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
    //Create new Order
    newOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO orders set ?', [req.body], (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'Order created successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'wrong params' });
                }
            });
        });
    }
    ;
    //Edit or update Order
    updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE orders SET customer_id='" + req.body.customer_id + "', total='" + req.body.total + "', placed='" + req.body.placed + "', completed='" + req.body.completed + "', , status='" + req.body.status + "'  WHERE order_id=" + req.params.id;
            yield database_1.default.query(sql, (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'Order updated successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
    //Delete Order
    deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM orders WHERE order_id = ?', [id], (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'Order deleted successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
}
;
const orderController = new OrderController();
exports.default = orderController;
