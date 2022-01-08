import { Router } from 'express';
import _productsController from '../controllers/_productsController';

class ProductsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', _productsController.listPaginated);
    this.router.get('/list', _productsController.list);
    this.router.post('/', _productsController.save);
    this.router.patch('/:id', _productsController.update);
    this.router.delete('/:id', _productsController.delete);
    this.router.get('/:id', _productsController.getById);
    this.router.get('/search', _productsController.getData);
  }
}

const productsRoutes: ProductsRoutes = new ProductsRoutes();
export default productsRoutes.router;
