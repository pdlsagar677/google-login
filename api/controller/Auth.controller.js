import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { name, email, phoneNumber, avatar } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const newUser = new User({
        name,
        email,
        phoneNumber,
        avatar,
      });
      await newUser.save();
      user = newUser;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); 

    res.cookie("access_token", token, {
      httpOnly: true, 
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message, 
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized"
      });
    }
    
    // Verify token and extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch the complete user data from database using the ID
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    
    // Return the complete user object
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
