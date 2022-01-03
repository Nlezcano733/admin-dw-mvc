import mongoose from 'mongoose';

export interface I_product extends mongoose.Document {
  title: string,
  brand: string,
  type: string,
  category: string,
  description: string,
  price: number,
  stock: number,
  picture: string;
  created_at: Date;
}