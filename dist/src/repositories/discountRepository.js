"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const discountSchema_1 = require("../dataAccess/schemas/discountSchema");
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class DiscountRepository extends _baseRepository_1.default {
    constructor() {
        super(discountSchema_1.discountSchema);
    }
}
Object.seal(DiscountRepository);
module.exports = DiscountRepository;
//# sourceMappingURL=discountRepository.js.map