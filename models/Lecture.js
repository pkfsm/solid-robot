import mongoose from "mongoose";

export default mongoose.model("Lecture", new mongoose.Schema({
  subjectId: mongoose.Schema.Types.ObjectId,
  title: String,
  embedLink: String,
  downloadLink: String,
  notesLink: String,
  dppLink: String,
  order: Number,
  isVisible: { type: Boolean, default: true }
}));
