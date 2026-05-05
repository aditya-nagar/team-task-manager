import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (user.role !== "Admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  next();
};