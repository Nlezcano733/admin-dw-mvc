import { Model } from 'mongoose';
import { I_category } from "../model/interfaces/I_category";
import categoryModel from '../model/categoryModel';
import baseRepository from "./_baseRepository";

class CategoryRepository extends baseRepository<I_category>{

  constructor(schemaModel: Model<I_category>) {
    super(schemaModel);
  }

}

const categoryRepository = new CategoryRepository(categoryModel);
export default categoryRepository;