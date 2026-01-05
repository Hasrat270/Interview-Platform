import express from "express";
import mongoose from "mongoose";

import { ENV } from "./lib/env.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Success from API." });
});

async (params) => {};

app.listen(ENV.PORT, () => {
  console.log(`Server listening on port: ${ENV.PORT}.`);
});
