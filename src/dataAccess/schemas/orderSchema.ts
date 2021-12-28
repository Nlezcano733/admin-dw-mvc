import { Document } from 'mongoose';
import DataAccess from '../dataAccess';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

/**
 * @deprecated
 */
class OrderSchema {

  static get schema() {
    let schema = new mongoose.Schema({
      products: Array,
      subtotal: Number,
      discounts: Number,
      total: Number,
      date: Date
    });

    return schema;
  }

}

export const orderSchema = mongooseConnection.model<Document>("Order", OrderSchema.schema);