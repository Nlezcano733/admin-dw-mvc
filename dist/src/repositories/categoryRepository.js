"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryModel_1 = __importDefault(require("../model/categoryModel"));
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class CategoryRepository extends _baseRepository_1.default {
    constructor(schemaModel) {
        super(schemaModel);
    }
}
const categoryRepository = new CategoryRepository(categoryModel_1.default);
exports.default = categoryRepository;
//# sourceMappingURL=categoryRepository.js.map