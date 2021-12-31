import { Model, Document } from 'mongoose';
import { I_product } from "../model/interfaces/I_product";
import productSchema from '../model/productModel';
import baseRepository from "./_baseRepository";

class ProductRepository extends baseRepository<I_product>{

  constructor(schemaModel: Model<I_product>) {
    super(schemaModel);
  }

}

export const productRepository = new ProductRepository(productSchema);