"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    products: Array,
    subtotal: Number,
    discounts: Number,
    total: Number,
    date_purchase: Date
});
exports.default = (0, mongoose_1.model)('Order', orderSchema);
//# sourceMappingURL=orderModel.js.map