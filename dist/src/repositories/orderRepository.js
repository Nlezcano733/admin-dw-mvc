"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const orderSchema_1 = require("../dataAccess/schemas/orderSchema");
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class OrderRepository extends _baseRepository_1.default {
    constructor() {
        super(orderSchema_1.orderSchema);
    }
}
Object.seal(OrderRepository);
module.exports = OrderRepository;
//# sourceMappingURL=orderRepository.js.map