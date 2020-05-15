"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = __importDefault(require("../controllers/customerController"));
class CustomerRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/customer', customerController_1.default.getAllCustomers);
        this.router.get('/customer/:id', customerController_1.default.getCustomerById);
        this.router.post('/customer', customerController_1.default.newCustomer);
        this.router.put('/customer/:id', customerController_1.default.updateCustomer);
        this.router.delete('/customer/:id', customerController_1.default.deleteCustomer);
    }
}
const customerRoute = new CustomerRoute();
exports.default = customerRoute.router;
