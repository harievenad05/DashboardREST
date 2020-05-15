"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controllers/orderController"));
class OrderRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/order', orderController_1.default.getAllOrders);
        this.router.get('/orders', orderController_1.default.getAllOrdersWithCustomer);
        this.router.get('/order/:id', orderController_1.default.getOrderById);
        this.router.post('/order', orderController_1.default.newOrder);
        this.router.put('/order/:id', orderController_1.default.updateOrder);
        this.router.delete('/order/:id', orderController_1.default.deleteOrder);
    }
}
const orderRoute = new OrderRoute();
exports.default = orderRoute.router;
