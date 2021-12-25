import { I_discount } from "../model/interfaces/I_discount";
import { discountSchema } from '../dataAccess/schemas/discountSchema';
import baseRepository from "./_baseRepository";

class DiscountRepository extends baseRepository<I_discount>{

  constructor() {
    super(discountSchema);
  }

}
Object.seal(DiscountRepository);
export = DiscountRepository;