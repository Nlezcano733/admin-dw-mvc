import { I_order } from "../model/interfaces/I_order";
import { orderSchema } from '../dataAccess/schemas/orderSchema';
import baseRepository from "./_baseRepository";

class OrderRepository extends baseRepository<I_order>{

  constructor() {
    super(orderSchema);
  }

}
Object.seal(OrderRepository);
export = OrderRepository;