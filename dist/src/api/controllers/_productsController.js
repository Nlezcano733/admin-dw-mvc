"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRepository_1 = __importDefault(require("../../repositories/productRepository"));
class ProductsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Not implement
        });
    }
    listPaginated(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let page = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
                let limit = ((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit) || 10;
                console.log(page);
                console.log("limit", limit);
                page = page;
                limit = limit;
                const data = yield productRepository_1.default.listPaginated(page, limit);
                res.json(data);
            }
            catch (e) {
                console.error(e);
                res.status(500).send("Error in server");
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // To implement
        });
    }
    getData(req, res) {
        // To implement
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serialize = req.body;
                const { title, brand, type, category, price, stock } = serialize;
                if ([title, brand, type, category, price, stock].every(d => d)) {
                    serialize.created_at = new Date;
                    const data = yield productRepository_1.default.save(serialize);
                    res.json(data);
                }
                else {
                    res.status(400).send("Error in body request");
                }
            }
            catch (e) {
                console.log(e);
                res.status(500).send("Error in server");
            }
        });
    }
    update(req, res) {
        // To implement
    }
    delete(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let id = ((_a = req.params) === null || _a === void 0 ? void 0 : _a.id) || "";
            id = id;
            const validate = yield productRepository_1.default.list();
            try {
                if (validate.find((v) => v._id === id)) {
                    yield productRepository_1.default.delete(id);
                    res.json(validate.filter((d) => d._id !== id));
                }
                else {
                    res.status(404).send("Error in request, ID not found");
                    return;
                }
            }
            catch (e) {
                res.status(400).send("Error in request");
            }
        });
    }
}
;
const productsController = new ProductsController();
exports.default = productsController;
//# sourceMappingURL=_productsController.js.map