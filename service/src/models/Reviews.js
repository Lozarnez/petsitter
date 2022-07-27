import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  petSitterId: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  }
});

export const Review = mongoose.model('Review', reviewSchema);
