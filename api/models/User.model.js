import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  avatar: {
    type: String,
    required: false,
  },
  admin: {
    type: Boolean,
    default: false,
},
},{timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;
