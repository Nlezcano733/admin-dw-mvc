import mongoose, { Schema, model } from 'mongoose';

export interface I_product extends mongoose.Document {
  title: string,
  model: string,
  brand: string,
  type: string,
  category: string,
  description: string,
  price: number,
  stock: number,
  picture: string;
  created_at: Date;
}

const productModel = new Schema({
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

export default model<I_product>('Product', productModel);