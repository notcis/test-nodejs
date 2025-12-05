import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import apiRouter from "./routes/api.router.js";
import { notFoundHandler } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api", apiRouter);

// Health root
app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Node.js API running",
    timestamp: new Date().toISOString(),
  });
});

// 404 and error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
