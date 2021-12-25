import { Document } from 'mongoose';
import DataAccess from '../dataAccess';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProductSchema {

  static get schema() {
    let schema = new mongoose.Schema({
      title: String,
      model: String,
      brand: String,
      type: String,
      category: String,
      description: String,
      price: Number,
      stock: Number,
      picture: String,
      created_at: Date
    });

    return schema;
  }

}

export const productSchema = mongooseConnection.model<Document>("Product", ProductSchema.schema);