"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const discountSchema = new mongoose_1.Schema({
    product: Array,
    percentage: Number,
    total_discount: Number,
    date_end: Date,
    is_active: Boolean,
});
exports.default = (0, mongoose_1.model)('Discount', discountSchema);
//# sourceMappingURL=discountModel.js.map