"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderModel {
    constructor(orderModel) {
        this._orderModel = orderModel;
    }
    get products() {
        return this._orderModel.products;
    }
    get subtotal() {
        return this._orderModel.subtotal;
    }
    get discounts() {
        return this._orderModel.discounts;
    }
    get total() {
        return this._orderModel.total;
    }
    get date() {
        return this._orderModel.date;
    }
}
Object.seal(OrderModel);
// export = OrderModel;
//# sourceMappingURL=orderModel.js.map