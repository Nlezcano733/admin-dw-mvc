"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandSchema = void 0;
const dataAccess_1 = __importDefault(require("../dataAccess"));
var mongoose = dataAccess_1.default.mongooseInstance;
var mongooseConnection = dataAccess_1.default.mongooseConnection;
/**
 * @deprecated
 */
class BrandSchema {
    static get schema() {
        let schema = new mongoose.Schema({
            name: String,
            type: String,
            model: Array
        });
        return schema;
    }
}
exports.brandSchema = mongooseConnection.model("Brand", BrandSchema.schema);
//# sourceMappingURL=brandSchema.js.map