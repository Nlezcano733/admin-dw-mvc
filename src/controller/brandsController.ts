import { Request, Response } from 'express';
import { I_brand } from '../model/interfaces/I_brand';
import { _business } from '../model/interfaces/_business';
import brandRepository from '../repositories/bandRepository';
import { I_writeController } from './interfaces/common';

class BrandsController implements I_writeController {

  async save(req: Request, res: Response): Promise<void> {
    const serializable: I_brand = req.body;
    await brandRepository.save(serializable);
  }

  async update(req: Request, res: Response): Promise<void> {
  }

  async delete(req: Request, res: Response): Promise<void> {
  }

  async getByName(name: string): Promise<I_brand[]> {
    return await brandRepository.getData("", name);
  }
};

const brandsController = new BrandsController();
export default brandsController;