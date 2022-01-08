import { Router } from 'express';
import productsController from '../controller/productsController';

class ProductsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', productsController.listPaginated);
    this.router.get('/:id', productsController.getById);
    this.router.get('/delete/:id', productsController.delete);
    this.router.post('/add', productsController.save);
    this.router.post('/edit/:id', productsController.update);
  }
}

const productsRoutes: ProductsRoutes = new ProductsRoutes();
export default productsRoutes.router;