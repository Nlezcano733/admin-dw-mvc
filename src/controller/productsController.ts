import { Request, Response } from 'express';
import { I_baseController } from './interfaces/I_baseController';
import { I_product } from '../model/interfaces/I_product';
import { _business } from '../model/interfaces/_business';
import productRepository from '../repositories/productRepository';
import Filter from '../lib/filters';

class ProductsController implements I_baseController {

  async list(req: Request, res: Response): Promise<void> {
    const data = await productRepository.list();
    res.render("products", {
      tabTitle: "Products",
      products: data
    });
  }

  async listPaginated(req: Request, res: Response): Promise<void> {
    let page = req.query?.page || 1;
    let limit = req.query?.limit || 4;

    page = <number>page;
    limit = <number>limit;

    const data = await productRepository.listPaginated(page, limit);
    const totalData = await productRepository.list();

    const brands = Filter.getBrands(totalData);
    const categories = Filter.getCategories(totalData);

    const nextPage = page < data.total_pages
      ? `/products?page=${data.next}`
      : null;

    const prevPage = page > 1
      ? `/products?page=${data.previous}`
      : null;

    res.render("products", {
      tabTitle: "Products",
      products: data.results,
      brands: brands || [],
      categories: categories || [],
      next: nextPage,
      previous: prevPage,
    });
  }

  async getById(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const data: I_product | null = await productRepository.getById(id);
    const totalData = await productRepository.list();

    const brands = Filter.getBrands(totalData);
    const categories = Filter.getCategories(totalData);

    if (data !== null) {
      res.render("editProduct", {
        tabTitle: "Product detail",
        data: data,
        brands: brands,
        categories: categories
      });
    } else {
      res.redirect('/products');
    }
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
    const id: string = req.params.id;
    const serialize: I_product = req.body;
    const { title, brand, type, category, price, stock } = serialize;

    if ([title, brand, type, category, price, stock].every(d => d)) {
      serialize.created_at = new Date;
      await productRepository.update(serialize, id);
      res.redirect('/products');
    } else {
      res.redirect('/products');
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    await productRepository.delete(id);

    res.redirect('/products');
  }
};

const productsController = new ProductsController();
export default productsController;