import { Request, Response } from 'express';
import { I_product } from '../model/interfaces/I_product';
import { _business } from '../model/interfaces/_business';
import { I_baseController } from './interfaces/I_baseController';
import ProductsBusiness from '../model/business/productBusiness';

class ProductsController implements I_baseController<ProductsBusiness> {
  private title: string;
  private errorMsg: string;

  constructor() {
    this.title = "Products";
    this.errorMsg = "Error in request";
  }

  list(req: Request, res: Response): void {
    try {
      let productBusiness = new ProductsBusiness;
      productBusiness.list((err, result) => {
        res.render('products', {
          title: "Products",
          result: result,
          first: [...result],
          error: err ? true : false
        });
      });
    } catch (e) {
      console.log(e);
      res.render('products', {
        title: this.title,
        error: true,
        errorMsg: this.errorMsg
      });
    }
  }

  listPaginated(req: Request, res: Response): void {
    // Not implemented yet
  }

  getById(req: Request, res: Response): void {
    // Not implemented yet
  }

  getData(req: Request, res: Response): void {
    // Not implemented yet
  }

  save(req: Request, res: Response): void {
    // try {
    //   let product: I_product = <I_product>req.body;

    //   this.productBusiness.save(product, (err, result) => {
    //     console.log(result);
    //     res.render("products/add", {
    //       title: this.title,
    //       error: err ? true : false
    //     });
    //   });
    // } catch (e) {
    //   console.error(e);
    //   res.render("products/add", {
    //     title: this.title,
    //     error: true,
    //     errorMsg: this.errorMsg
    //   });
    // }
  }

  update(req: Request, res: Response): void {
    //   try {
    //     let product: I_product = <I_product>req.body;
    //     let id: string = req.params.id;

    //     this.productBusiness.update(product, id, (err, result) => {
    //       res.render('products', {
    //         title: this.title,
    //         error: err ? true : false
    //       });
    //     });
    //   } catch (e) {
    //     console.error(e);
    //     res.render("products", {
    //       title: this.title,
    //       error: true,
    //       errorMsg: this.errorMsg
    //     });
    //   }
  }

  delete(req: Request, res: Response): void {
    //   try {
    //     let id: string = req.params.id;

    //     this.productBusiness.delete(id, (err) => {
    //       res.render("products", {
    //         error: err ? true : false
    //       });
    //     });
    //   } catch (e) {
    //     console.log(e);
    //     res.render("products", {
    //       title: this.title,
    //       error: true,
    //       errorMsg: this.errorMsg
    //     });
    //   }
  }
};

const productsController = new ProductsController();
export default productsController;