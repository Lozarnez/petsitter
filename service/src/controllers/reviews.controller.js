import { Review } from "../models/Reviews.js";

export const createReview = async (req, res) => {
  const { petSitterId, rating, comments } = req.body;
  
  try {
    const newReview = await Review.create({
      petSitterId,
      rating,
      comments,
    });

    res.json({review: newReview, message: 'Review creado correctamente', status: 'success'});
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const reviewsByPetsitterId = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Review.find({ petSitterId: id });

    res.json({reviews, message: 'Reviews encontrados correctamente', status: 'success'});
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}
