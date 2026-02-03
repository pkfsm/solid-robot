import mongoose from "mongoose";

export default mongoose.model("Subject", new mongoose.Schema({
  title: String,
  slug: String,
  batchId: mongoose.Schema.Types.ObjectId,
  order: Number
}));
