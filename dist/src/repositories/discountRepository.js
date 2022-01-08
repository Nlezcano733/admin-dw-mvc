"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discountModel_1 = __importDefault(require("../model/discountModel"));
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class DiscountRepository extends _baseRepository_1.default {
    constructor(schemaModel) {
        super(schemaModel);
    }
}
const discountRepository = new DiscountRepository(discountModel_1.default);
exports.default = discountRepository;
//# sourceMappingURL=discountRepository.js.map