import mongoose from 'mongoose';

export interface I_brand extends mongoose.Document {
  name: string,
  type: string,
  model: string[];
}