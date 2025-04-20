import User from "../models/User.model.js";

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get user by ID
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }, { password: 0 });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// // Delete user by ID
const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await User.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found or already deleted" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
};
const updateUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUserData = req.body;
  
      const updatedData = await User.updateOne(
        { _id: id },
        {
          $set: updatedUserData,
        }
      );
      return res.status(200).json(updatedData);
    } catch (error) {
      next(error);
    }
  };

// Export all functions
export {
  getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
};
