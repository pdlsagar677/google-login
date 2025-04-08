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
