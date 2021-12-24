import { Request, Response } from 'express';
import { productRepo } from '../repositories/productsRepository';
import { I_product } from '../model/productModel';

class ProductsController {

  public async list(req: Request, res: Response) {
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    page = (<number>page);
    limit = (<number>limit);

    const products = await productRepo.listPaginated(page, limit);
    res.json([...products]);
  }

  public async save(req: Request, res: Response) {
    const serialize: I_product = req.body;
    const { title, brand, type, category, price, stock } = serialize;
    console.log(serialize);
    if ([title, brand, type, category, price, stock].every(d => d)) {
      serialize.created_at = new Date;
      const data = await productRepo.save(serialize);
      res.redirect('/');
      res.json(data);
    } else {
      res.redirect('/');
    }

  }

}

export const productController: ProductsController = new ProductsController();