"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brandModel_1 = __importDefault(require("../model/brandModel"));
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class BrandRepository extends _baseRepository_1.default {
    constructor(schemaModel) {
        super(schemaModel);
    }
}
const brandRepository = new BrandRepository(brandModel_1.default);
exports.default = brandRepository;
//# sourceMappingURL=bandRepository.js.map