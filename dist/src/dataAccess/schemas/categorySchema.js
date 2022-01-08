"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const dataAccess_1 = __importDefault(require("../dataAccess"));
var mongoose = dataAccess_1.default.mongooseInstance;
var mongooseConnection = dataAccess_1.default.mongooseConnection;
/**
 * @deprecated
 */
class CategorySchema {
    static get schema() {
        let schema = new mongoose.Schema({
            name: String,
            type: String
        });
        return schema;
    }
}
exports.categorySchema = mongooseConnection.model("Category", CategorySchema.schema);
//# sourceMappingURL=categorySchema.js.map