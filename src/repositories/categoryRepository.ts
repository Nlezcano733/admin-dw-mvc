import { I_category } from "../model/interfaces/I_category";
import { categorySchema } from '../dataAccess/schemas/categorySchema';
import baseRepository from "./_baseRepository";

class CategoryRepository extends baseRepository<I_category>{

  constructor() {
    super(categorySchema);
  }

}
Object.seal(CategoryRepository);
export = CategoryRepository;