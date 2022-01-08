import { Model } from 'mongoose';
import { I_brand } from "../model/interfaces/I_brand";
import brandModel from '../model/brandModel';
import baseRepository from "./_baseRepository";

class BrandRepository extends baseRepository<I_brand>{

  constructor(schemaModel: Model<I_brand>) {
    super(schemaModel);
  }

}

const brandRepository = new BrandRepository(brandModel);
export default brandRepository;