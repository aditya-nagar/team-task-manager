import express from "express";
import Task from "../models/Task.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Task
router.post("/", protect, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Get All Tasks (for logged user)
router.get("/", protect, async (req, res) => {
  const tasks = await Task.find()
    .populate("assignedTo", "name email")
    .populate("project", "name");

  res.json(tasks);
});

// Update Task Status
router.put("/:id", protect, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
});

// Delete Task
router.delete("/:id", protect, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;