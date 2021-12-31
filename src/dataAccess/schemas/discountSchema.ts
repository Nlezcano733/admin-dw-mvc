import { Document } from 'mongoose';
import DataAccess from '../dataAccess';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

/**
 * @deprecated
 */
class DiscountSchema {

  static get schema() {
    let schema = new mongoose.Schema({
      product: String,
      percentage: Number,
      total_discount: Number,
      date_end: Date,
      is_active: Boolean
    });

    return schema;
  }

}

export const discountSchema = mongooseConnection.model<Document>("Discount", DiscountSchema.schema);