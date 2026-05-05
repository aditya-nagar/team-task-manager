import express from "express";
import Project from "../models/Project.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Create Project (Admin only)
router.post("/", protect, isAdmin, async (req, res) => {
  const project = await Project.create({
    ...req.body,
    createdBy: req.user.id
  });

  res.json(project);
});

// Get Projects
router.get("/", protect, async (req, res) => {
  const projects = await Project.find()
    .populate("members", "name email");

  res.json(projects);
});

export default router;