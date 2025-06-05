import User from "../models/User.model.js";
import Package from "../models/Packages-model.js";

// -- Users controllers --

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

const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// -- Admin create package --

const createPackage = async (req, res) => {
  try {
    if (!req.user || !req.user.admin) {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    const {
      title,
      destination,
      description,
      pricePerPerson,
      durationDays,
      itinerary,
      availableDates,
      imageUrls
    } = req.body;

    if (!title || !destination || !description || !pricePerPerson || !durationDays) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newPackage = new Package({
      title,
      destination,
      description,
      pricePerPerson,
      durationDays,
      itinerary,
      availableDates,
      imageUrls,
      createdBy: req.user._id
    });

    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const getPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// -- Export all --

export {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  createPackage,
  getPackages,
};
