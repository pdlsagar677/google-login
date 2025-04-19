const adminMiddleware = async (req, res, next) => {
    try {
      // Ensure that the user exists and has been attached via the authMiddleware
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized. User not found" });
      }
  
      // Check if the user is an admin (verify if 'admin' exists, not 'isAdmin')
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
  