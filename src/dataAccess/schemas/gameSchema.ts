import { Document } from 'mongoose';
import DataAccess from '../dataAccess';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class GameSchema {

  static get schema() {
    let schema = new mongoose.Schema({
      title: String,
      developer: String,
      description: String,
      price: Number,
      stock: Number,
      category: String,
      picture: String,
      created_at: Date
    });

    return schema;
  }

}

export const gameSchema = mongooseConnection.model<Document>("Game", GameSchema.schema);