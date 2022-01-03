import { Request, Response } from 'express';
import { I_product } from '../model/interfaces/I_product';
import { _business } from '../model/interfaces/_business';
import productRepository from '../repositories/productRepository';
import { I_baseController } from './interfaces/I_baseController';

class ProductsController implements I_baseController {

  async list(req: Request, res: Response): Promise<void> {
    const data = await productRepository.list();
    res.render("products", {
      title: "Products",
      products: data
    });
  }

  async listPaginated(req: Request, res: Response): Promise<void> {
    let page = req.query?.page || 1;
    let limit = req.query?.limit || 5;

    page = <number>page;
    limit = <number>limit;

    const data = await productRepository.listPaginated(page, limit);
    res.render("products", {
      title: "Products",
      products: data.results,
      next: "/products?page=" + data.next,
      previous: "/products?page=" + data.previous
    });
  }

  async getById(req: Request, res: Response): Promise<void> {

  }

  getData(req: Request, res: Response): void {
    // Not implemented yet
  }

  async save(req: Request, res: Response): Promise<void> {
    const serialize: I_product = req.body;
    const { title, brand, type, category, price, stock } = serialize;

    if ([title, brand, type, category, price, stock].every(d => d)) {
      serialize.created_at = new Date;
      await productRepository.save(serialize);
      res.redirect('/products');
    } else {
      res.redirect('/products');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    // Not implemented
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    await productRepository.delete(id);

    res.redirect('/products');
  }
};

const productsController = new ProductsController();
export default productsController;