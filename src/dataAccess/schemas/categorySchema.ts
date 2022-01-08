import { Document } from 'mongoose';
import DataAccess from '../dataAccess';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

/**
 * @deprecated
 */
class CategorySchema {

  static get schema() {
    let schema = new mongoose.Schema({
      name: String,
      type: String
    });

    return schema;
  }

}

export const categorySchema = mongooseConnection.model<Document>("Category", CategorySchema.schema);