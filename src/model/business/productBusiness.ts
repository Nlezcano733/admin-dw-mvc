import { Callback, CallbackError, CallbackWithoutResult } from "mongoose";
import ProductRepository from "../../repositories/productRepository";
import { I_product } from "../interfaces/I_product";
import { _business } from "../interfaces/_business";

class ProductsBusiness implements _business<I_product> {
  private _productsRepository: ProductRepository;

  constructor() {
    this._productsRepository = new ProductRepository();
  }

  list(callback: (error: CallbackError, result: I_product[]) => void): void {
    this._productsRepository.list(callback);
  }

  listPaginated(page: number, limit: number, callback: (error: CallbackError, result: I_product[]) => void): void {
    this._productsRepository.listPaginated(page, limit, callback);
  }

  getById(id: string, callback: Callback<any>): void {
    this._productsRepository.getById(id, callback);
  }

  getData(key: string, value: any, callback: Callback<any>): void {
    this._productsRepository.getData(key, value, callback);
  }


  save(data: I_product, callback: Callback<any>): void {
    this._productsRepository.save(data, callback);
  }

  update(data: I_product, id: string, callback: Callback<any>): void {
    this._productsRepository.getById(id, (err, res) => {
      if (err) callback(err, res);
      else
        this._productsRepository.update(data, id, callback);
    });
  }

  delete(id: string, callback: CallbackWithoutResult): void {
    this._productsRepository.delete(id, callback);
  }
}


Object.seal(ProductsBusiness);
export default ProductsBusiness;