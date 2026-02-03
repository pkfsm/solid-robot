import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import apiRoutes from "./routes/api.js";
import nimdaRoutes from "./routes/nimda.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(console.error);

app.use("/api", apiRoutes);
app.use("/api/nimda", nimdaRoutes);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(process.env.PORT || 3000);
