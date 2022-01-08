"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const gameSchema_1 = require("../dataAccess/schemas/gameSchema");
const _baseRepository_1 = __importDefault(require("./_baseRepository"));
class GameRepository extends _baseRepository_1.default {
    constructor() {
        super(gameSchema_1.gameSchema);
    }
}
Object.seal(GameRepository);
module.exports = GameRepository;
//# sourceMappingURL=gameRepository.js.map