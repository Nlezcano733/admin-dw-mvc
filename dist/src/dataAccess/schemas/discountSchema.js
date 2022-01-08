"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountSchema = void 0;
const dataAccess_1 = __importDefault(require("../dataAccess"));
var mongoose = dataAccess_1.default.mongooseInstance;
var mongooseConnection = dataAccess_1.default.mongooseConnection;
/**
 * @deprecated
 */
class DiscountSchema {
    static get schema() {
        let schema = new mongoose.Schema({
            product: String,
            percentage: Number,
            total_discount: Number,
            date_end: Date,
            is_active: Boolean
        });
        return schema;
    }
}
exports.discountSchema = mongooseConnection.model("Discount", DiscountSchema.schema);
//# sourceMappingURL=discountSchema.js.map