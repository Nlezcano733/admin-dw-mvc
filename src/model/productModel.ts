import { model, Schema } from "mongoose";
import { I_product } from "./interfaces/I_product";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";

const productSchema = new Schema({
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

productSchema.plugin(mongoosePagination);

export default model<I_product, Pagination<I_product>>("Product", productSchema);