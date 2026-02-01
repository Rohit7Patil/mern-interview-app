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
router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/end", protectRoute, endSession);

export default router;
