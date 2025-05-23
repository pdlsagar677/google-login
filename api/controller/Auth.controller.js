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
        admin: false
      });
      await newUser.save();
      console.log("New user created:", newUser);
      user = newUser;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d' 
    }); 
    console.log("Generated jwt token", token)

    // Set HTTP-only cookie
    res.cookie("access_token", token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', // Use secure in production
      sameSite: 'strict',
      maxAge: 86400000 // 1 day in ms
    });

    // Return user data but NOT the token (since it's HTTP-only)
    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        phoneNumber: user.phoneNumber,
        admin: user.admin
      }
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


export const logout = (req, res)=>{
res.clearCookie("access_token",{
  httpOnly:true,
  sameSite:"strict",
});
res.status(200).json({
  success:true,
  message:"logout successfully",
});
}