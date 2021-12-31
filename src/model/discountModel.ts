import { I_discount } from "./interfaces/I_discount";

class DiscountModel {

  private _discountModel: I_discount;

  constructor(discountModel: I_discount) {
    this._discountModel = discountModel;
  }
  get product(): string {
    return this._discountModel.product;
  }

  get percentage(): number {
    return this._discountModel.percentage;
  }

  get total_discount(): number {
    return this._discountModel.total_discount;
  }

  get date_end(): Date {
    return this._discountModel.date_end;
  }

  get is_active(): boolean {
    return this._discountModel.is_active;
  }


}
Object.seal(DiscountModel);
// export = DiscountModel;