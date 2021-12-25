import mongoose from 'mongoose';

export interface I_game extends mongoose.Document {
  title: string,
  developer: string,
  description: string,
  price: number,
  stock: number,
  category: string,
  picture: string;
  created_at: Date;
}