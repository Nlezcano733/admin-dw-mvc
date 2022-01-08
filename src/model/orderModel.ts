import { I_order } from "./interfaces/I_order";

class OrderModel {

  private _orderModel: I_order;

  constructor(orderModel: I_order) {
    this._orderModel = orderModel;
  }
  get products(): string[] {
    return this._orderModel.products;
  }
  get subtotal(): number {
    return this._orderModel.subtotal;
  }
  get discounts(): number {
    return this._orderModel.discounts;
  }
  get total(): number {
    return this._orderModel.total;
  }
  get date(): Date {
    return this._orderModel.date;
  }
}
Object.seal(OrderModel);
// export = OrderModel;