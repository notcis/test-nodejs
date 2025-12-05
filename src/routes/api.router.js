import { Router } from "express";
import { healthController } from "../controllers/health.controller.js";
import { echoController } from "../controllers/echo.controller.js";

const router = Router();

router.get("/health", healthController);
router.post("/echo", echoController);

export default router;
