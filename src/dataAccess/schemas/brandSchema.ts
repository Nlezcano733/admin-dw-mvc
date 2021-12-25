import { Document } from 'mongoose';
import DataAccess from '../dataAccess';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BrandSchema {

  static get schema() {
    let schema = new mongoose.Schema({
      name: String,
      type: String,
      model: Array
    });

    return schema;
  }

}

export const brandSchema = mongooseConnection.model<Document>("Brand", BrandSchema.schema);