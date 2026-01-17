import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rating: { type: Number, min: 1, max: 5 },
    message: { type: String, required: true, trim: true },
    role: { type: String, trim: true },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
