import express from "express";
import auth from "../middleware/auth.js";
import Batch from "../models/Batch.js";
import Subject from "../models/Subject.js";
import Lecture from "../models/Lecture.js";

const r = express.Router();
r.use(auth);

r.post("/batch", async (req, res) =>
  res.json(await Batch.create(req.body))
);

r.post("/subject", async (req, res) =>
  res.json(await Subject.create(req.body))
);

r.post("/lecture", async (req, res) =>
  res.json(await Lecture.create(req.body))
);

r.put("/lecture/:id", async (req, res) =>
  res.json(await Lecture.findByIdAndUpdate(req.params.id, req.body))
);

export default r;
