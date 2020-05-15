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
class CustomerController {
    //Get All Customers
    getAllCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM customer', (err, result, field) => {
                if (err)
                    throw err;
                res.status(200).json({ success: 1, message: 'success', data: result });
            });
        });
    }
    ;
    //Get Customer by ID
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM customer WHERE customer_id = ?', [id], (err, result, field) => {
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
    //Create new customer
    newCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO customer set ?', [req.body], (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'Customer created successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'wrong params' });
                }
            });
        });
    }
    ;
    //Edit or update customer
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE customer SET name='" + req.body.name + "', email='" + req.body.email + "', state='" + req.body.state + "'  WHERE customer_id=" + req.params.id;
            yield database_1.default.query(sql, (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'Customer updated successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
    //Delete customer
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM customer WHERE customer_id = ?', [id], (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'Customer deleted successfully' });
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
const customerController = new CustomerController();
exports.default = customerController;
