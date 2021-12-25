import { I_brand } from "../model/interfaces/I_brand";
import { brandSchema } from '../dataAccess/schemas/brandSchema';
import baseRepository from "./_baseRepository";

class BrandRepository extends baseRepository<I_brand>{

  constructor() {
    super(brandSchema);
  }

}
Object.seal(BrandRepository);
export = BrandRepository;