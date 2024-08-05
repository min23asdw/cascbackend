import { Request, Response } from 'express';
import OneTimeLink from '../models/OneTimeLink';
import Review from '../models/reviewModel';

export const insertReview = async (req: Request, res: Response) => {
  const { token, desc, star, university_id } = req.body;

  try {
    const oneTimeLink = await OneTimeLink.findOneAndDelete({ token, university_id });
    if (!oneTimeLink) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }


    const review = new Review({ desc, star, university_id, verified: false });
    await review.save();
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
};
