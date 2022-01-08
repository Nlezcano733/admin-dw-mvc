"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderModel_1 = __importDefault(require("../model/orderModel"));
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class OrderRepository extends _baseRepository_1.default {
    constructor(schemaModel) {
        super(schemaModel);
    }
}
const orderRepository = new OrderRepository(orderModel_1.default);
exports.default = orderRepository;
//# sourceMappingURL=orderRepository.js.map