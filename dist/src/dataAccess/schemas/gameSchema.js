"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameSchema = void 0;
const dataAccess_1 = __importDefault(require("../dataAccess"));
var mongoose = dataAccess_1.default.mongooseInstance;
var mongooseConnection = dataAccess_1.default.mongooseConnection;
/**
 * @deprecated
 */
class GameSchema {
    static get schema() {
        let schema = new mongoose.Schema({
            title: String,
            developer: String,
            description: String,
            price: Number,
            stock: Number,
            category: String,
            picture: String,
            created_at: Date
        });
        return schema;
    }
}
exports.gameSchema = mongooseConnection.model("Game", GameSchema.schema);
//# sourceMappingURL=gameSchema.js.map