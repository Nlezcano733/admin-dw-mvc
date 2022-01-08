"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controller/productsController"));
class ProductsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.default.listPaginated);
        this.router.get('/:id', productsController_1.default.getById);
        this.router.get('/delete/:id', productsController_1.default.delete);
        this.router.post('/add', productsController_1.default.save);
        this.router.post('/edit/:id', productsController_1.default.update);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
//# sourceMappingURL=products.js.map