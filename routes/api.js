import express from "express";
import Batch from "../models/Batch.js";
import Subject from "../models/Subject.js";
import Lecture from "../models/Lecture.js";

const r = express.Router();

r.get("/batches", async (_, res) =>
  res.json(await Batch.find().sort("order"))
);

r.get("/batch/:slug", async (req, res) => {
  const batch = await Batch.findOne({ slug: req.params.slug });
  const subjects = await Subject.find({ batchId: batch._id }).sort("order");
  res.json({ batch, subjects });
});

r.get("/subject/:id", async (req, res) =>
  res.json(await Lecture.find({
    subjectId: req.params.id,
    isVisible: true
  }).sort("order"))
);

r.get("/lecture/:id", async (req, res) =>
  res.json(await Lecture.findById(req.params.id))
);

export default r;
