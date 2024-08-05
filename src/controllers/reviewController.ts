import { Request, Response } from 'express';
import Review from '../models/reviewModel';

export const getReviewsByUniversity = async (req: Request, res: Response) => {
  const { university_id } = req.params;

  try {
    const reviews = await Review.find({ university_id });
    if (reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews' });
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
