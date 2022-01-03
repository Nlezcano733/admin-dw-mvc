import { Request, Response } from 'express';
import { I_baseController } from '../../controller/interfaces/I_baseController';
import { I_product } from '../../model/interfaces/I_product';
import { _business } from '../../model/interfaces/_business';
import productRepository from '../../repositories/productRepository';


class ProductsController implements I_baseController {

  async list(req: Request, res: Response) {
    // Not implement
  }

  async listPaginated(req: Request, res: Response) {
    try {
      let page = req.query?.page || 1;
      let limit = req.query?.limit || 10;
      console.log(page);
      console.log("limit", limit);
      page = (<number>page);
      limit = (<number>limit);

      const data = await productRepository.listPaginated(page, limit);
      res.json(data);
    } catch (e) {
      console.error(e);
      res.status(500).send("Error in server");
    }
  }

  async getById(req: Request, res: Response) {
    // To implement
  }

  getData(req: Request, res: Response): void {
    // To implement
  }

  async save(req: Request, res: Response) {
    try {
      const serialize: I_product = req.body;
      const { title, brand, type, category, price, stock } = serialize;

      if ([title, brand, type, category, price, stock].every(d => d)) {
        serialize.created_at = new Date;
        const data = await productRepository.save(serialize);
        res.json(data);
      } else {
        res.status(400).send("Error in body request");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Error in server");
    }
  }

  update(req: Request, res: Response): void {
    // To implement
  }

  async delete(req: Request, res: Response) {
    let id = req.params?.id || "";
    id = (<string>id);

    const validate = await productRepository.list();
    try {
      if (validate.find((v: any) => v._id === id)) {
        await productRepository.delete(id);
        res.json(validate.filter((d: any) => d._id !== id));
      } else {
        res.status(404).send("Error in request, ID not found");
        return;
      }
    } catch (e) {
      res.status(400).send("Error in request");
    }

  }
};

const productsController = new ProductsController();
export default productsController;