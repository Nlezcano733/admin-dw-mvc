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
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const filters_1 = __importDefault(require("../lib/filters"));
class ProductsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield productRepository_1.default.list();
            res.render("products", {
                tabTitle: "Products",
                products: data
            });
        });
    }
    listPaginated(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let page = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
            let limit = ((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit) || 4;
            page = page;
            limit = limit;
            const data = yield productRepository_1.default.listPaginated(page, limit);
            const totalData = yield productRepository_1.default.list();
            const brands = filters_1.default.getBrands(totalData);
            const categories = filters_1.default.getCategories(totalData);
            const nextPage = page < data.total_pages
                ? `/products?page=${data.next}`
                : null;
            const prevPage = page > 1
                ? `/products?page=${data.previous}`
                : null;
            res.render("products", {
                tabTitle: "Products",
                products: data.results,
                brands: brands || [],
                categories: categories || [],
                next: nextPage,
                previous: prevPage,
            });
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = yield productRepository_1.default.getById(id);
            const totalData = yield productRepository_1.default.list();
            const brands = filters_1.default.getBrands(totalData);
            const categories = filters_1.default.getCategories(totalData);
            if (data !== null) {
                res.render("editProduct", {
                    tabTitle: "Product detail",
                    data: data,
                    brands: brands,
                    categories: categories
                });
            }
            else {
                res.redirect('/products');
            }
        });
    }
    getData(req, res) {
        // Not implemented yet
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serialize = req.body;
            const { title, brand, type, category, price, stock } = serialize;
            if ([title, brand, type, category, price, stock].every(d => d)) {
                serialize.created_at = new Date;
                yield productRepository_1.default.save(serialize);
                res.redirect('/products');
            }
            else {
                res.redirect('/products');
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const serialize = req.body;
            const { title, brand, type, category, price, stock } = serialize;
            if ([title, brand, type, category, price, stock].every(d => d)) {
                serialize.created_at = new Date;
                yield productRepository_1.default.update(serialize, id);
                res.redirect('/products');
            }
            else {
                res.redirect('/products');
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield productRepository_1.default.delete(id);
            res.redirect('/products');
        });
    }
}
;
const productsController = new ProductsController();
exports.default = productsController;
//# sourceMappingURL=productsController.js.map