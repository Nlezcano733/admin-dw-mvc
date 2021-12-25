import mongoose from 'mongoose';

export interface I_category extends mongoose.Document {
  name: string,
  type: string;
}