"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../model/productModel"));
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class ProductRepository extends _baseRepository_1.default {
    constructor(schemaModel) {
        super(schemaModel);
    }
}
const productRepository = new ProductRepository(productModel_1.default);
exports.default = productRepository;
//# sourceMappingURL=productRepository.js.map