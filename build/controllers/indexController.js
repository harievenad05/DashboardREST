"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    indexStart(req, res) {
        res.status(200).json({ message: 'Hello from Index' });
    }
    ;
}
;
const indexController = new IndexController();
exports.default = indexController;
