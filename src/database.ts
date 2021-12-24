import mongoose, { mongo } from 'mongoose';
require('dotenv').config();

mongoose.connect(process.env.DB_URI || "")
  .then(() => console.log("DB is connected"))
  .catch((e: Error) => console.error(e));