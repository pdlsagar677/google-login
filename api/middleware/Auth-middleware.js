import jwt from 'jsonwebtoken';
import User from "../models/User.model.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;

  // Support Bearer token in headers or access_token in cookies
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (req.cookies && req.cookies.access_token) {
    token = req.cookies.access_token;
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // This assumes the JWT payload includes `id` field
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

export default authMiddleware;
