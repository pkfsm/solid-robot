import mongoose from "mongoose";

export default mongoose.model("Batch", new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  order: Number
}));
