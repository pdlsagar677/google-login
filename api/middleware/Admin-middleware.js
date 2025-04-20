const adminMiddleware = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized. User not found" });
    }

    if (!req.user.admin) {
      return res.status(403).json({ message: "Access denied. User is not an admin" });
    }

    next();
  } catch (error) {
    console.error("Admin middleware error:", error);
    res.status(500).json({ message: "Internal server error in admin middleware" });
  }
};

export default adminMiddleware;
