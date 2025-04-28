import mongoose from 'mongoose';

// Itinerary Schema: Ensure all fields are validated as needed
const itinerarySchema = new mongoose.Schema({
  day: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Package Schema: Main package schema with all necessary fields and validation
const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    duration: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    highlights: {
      type: [String],
      validate: [arrayLimit, 'Highlights should have at least one item'],
    },
    offer: String,
    itinerary: { type: [itinerarySchema], required: true },
    inclusions: { type: [String], required: true },
    exclusions: { type: [String], required: true },
  },
  { timestamps: true }
);

// Custom validator to check for non-empty highlights array
function arrayLimit(val) {
  return val.length > 0;
}

// Create the Package model from the schema
const Package = mongoose.model('Package', packageSchema);

export default Package;
