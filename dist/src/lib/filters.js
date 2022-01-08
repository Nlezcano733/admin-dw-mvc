"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Filter {
    static getBrands(data) {
        let brands = data.map(d => d.brand);
        return brands === null || brands === void 0 ? void 0 : brands.filter((b, i) => brands.indexOf(b) === i);
    }
    static getCategories(data) {
        let categories = data.map(d => d.category);
        return categories === null || categories === void 0 ? void 0 : categories.filter((b, i) => categories.indexOf(b) === i);
    }
}
exports.default = Filter;
//# sourceMappingURL=filters.js.map