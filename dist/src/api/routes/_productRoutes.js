"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _productsController_1 = __importDefault(require("../controllers/_productsController"));
class ProductsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', _productsController_1.default.listPaginated);
        this.router.get('/list', _productsController_1.default.list);
        this.router.post('/', _productsController_1.default.save);
        this.router.patch('/:id', _productsController_1.default.update);
        this.router.delete('/:id', _productsController_1.default.delete);
        this.router.get('/:id', _productsController_1.default.getById);
        this.router.get('/search', _productsController_1.default.getData);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
//# sourceMappingURL=_productRoutes.js.map