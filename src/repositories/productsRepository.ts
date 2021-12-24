import productModel, { I_product } from "../model/productModel";
import { crud } from "../interfaces/crud";

class ProductRepository implements crud<I_product>{

  public async list(): Promise<I_product[]> {
    return await productModel.find();
  };

  public async listPaginated(page: number, limit: number): Promise<I_product[]> {
    const data = await productModel.find();
    return data.slice((page - 1) * limit, page * limit);
  }

  public async save(data: I_product): Promise<I_product> {
    const newData = new productModel({ ...data });
    return await newData.save();
  }

  public async update(data: I_product, id: string): Promise<I_product> {
    return await productModel.replaceOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    await productModel.deleteOne({ _id: id });
  }

  public async getById(id: string): Promise<I_product | null> {
    return await productModel.findOne({ _id: id });
  }

  public async getData(key: string, value: any): Promise<I_product[]> {
    return await productModel.find({ [key]: value });
  }

}

export const productRepo = new ProductRepository();