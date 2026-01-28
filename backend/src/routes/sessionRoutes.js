import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  createSession,
  getActiveSessions,
  getMyRecentSessions,
  getSession,
  joinSession,
  endSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent", protectRoute, getMyRecentSessions);
router.get("/:id", protectRoute, getSession);
router.get("/:id/join", protectRoute, joinSession);
router.get("/:id/end", protectRoute, endSession);

export default router;
