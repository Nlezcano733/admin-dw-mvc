"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiscountModel {
    constructor(discountModel) {
        this._discountModel = discountModel;
    }
    get product() {
        return this._discountModel.product;
    }
    get percentage() {
        return this._discountModel.percentage;
    }
    get total_discount() {
        return this._discountModel.total_discount;
    }
    get date_end() {
        return this._discountModel.date_end;
    }
    get is_active() {
        return this._discountModel.is_active;
    }
}
Object.seal(DiscountModel);
// export = DiscountModel;
//# sourceMappingURL=discountModel.js.map