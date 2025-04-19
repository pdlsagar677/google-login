import jwt from 'jsonwebtoken';
import User from "../models/User.model.js";

const authMiddleware = async (req, res, next) => {
  // Extract the token from the cookies (since Firebase token is being sent as a cookie)
  const token = req.cookies.access_token;
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token not provided" });
  }

  try {
    // Verifying the Firebase token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch the user data based on the Firebase token's user ID (no password checking)
    const userData = await User.findById(decoded.id).select("-password");

    if (!userData) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user and token to request
    req.user = userData;
    req.token = token;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

export default authMiddleware;
