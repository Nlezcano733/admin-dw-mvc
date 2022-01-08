"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: String,
    brand: String,
    type: String,
    category: String,
    description: String,
    price: Number,
    stock: Number,
    picture: String,
    created_at: Date
});
exports.default = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=productModel.js.map