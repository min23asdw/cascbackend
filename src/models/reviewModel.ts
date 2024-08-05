import mongoose, { Document, Schema } from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  desc: { type: String, required: true },
  star: { type: Number, required: true },
  university_id: { type: String, required: true },
  verified: { type: Boolean, required: true },
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
