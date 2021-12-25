import { I_product } from "../model/interfaces/I_product";
import { productSchema } from '../dataAccess/schemas/productSchema';
import baseRepository from "./_baseRepository";

class ProductRepository extends baseRepository<I_product>{

  constructor() {
    super(productSchema);
  }

}
Object.seal(ProductRepository);
export = ProductRepository;