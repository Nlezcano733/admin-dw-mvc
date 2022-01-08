"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const dataAccess_1 = __importDefault(require("../dataAccess"));
var mongoose = dataAccess_1.default.mongooseInstance;
var mongooseConnection = dataAccess_1.default.mongooseConnection;
/**
 * @deprecated
 */
class OrderSchema {
    static get schema() {
        let schema = new mongoose.Schema({
            products: Array,
            subtotal: Number,
            discounts: Number,
            total: Number,
            date: Date
        });
        return schema;
    }
}
exports.orderSchema = mongooseConnection.model("Order", OrderSchema.schema);
//# sourceMappingURL=orderSchema.js.map