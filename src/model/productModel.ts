import { I_product } from "./interfaces/I_product";

class ProductModel {

  private _productModel: I_product;

  constructor(brandModel: I_product) {
    this._productModel = brandModel;
  }
  get title(): string {
    return this._productModel.title;
  }
  get model(): string {
    return this._productModel.model;
  }
  get brand(): string {
    return this._productModel.brand;
  }
  get type(): string {
    return this._productModel.type;
  }
  get category(): string {
    return this._productModel.category;
  }
  get description(): string {
    return this._productModel.description;
  }
  get price(): number {
    return this._productModel.price;
  }
  get stock(): number {
    return this._productModel.stock;
  }
  get picture(): string {
    return this._productModel.picture;
  }
  get created_at(): Date {
    return this._productModel.created_at;
  }
}
Object.seal(ProductModel);
export = ProductModel;