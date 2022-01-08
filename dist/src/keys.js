"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
require('dotenv').config();
exports.mongodb = { uri: process.env.DB_URI || "" };
//# sourceMappingURL=keys.js.map