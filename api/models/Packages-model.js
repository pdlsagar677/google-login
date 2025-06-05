import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  destination: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  pricePerPerson: { type: Number, required: true },
  durationDays: { type: Number, required: true },
  itinerary: [
    {
      day: Number,
      title: String,
      activities: [String]
    }
  ],
  availableDates: [{ type: Date }],
  imageUrls: [{ type: String }],
  isActive: { type: Boolean, default: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Package = mongoose.model("Package", PackageSchema);
export default Package;
