import { Request, Response } from 'express';
import OneTimeLink from '../models/OneTimeLink';
import crypto from 'crypto';
export const createOneTimeLink = async (req: Request, res: Response) => {
  const {  university_id } = req.body;
 

  try {
    const token = crypto.randomBytes(16).toString('hex');
    const oneTimeLink = new OneTimeLink({ token, university_id });
    await oneTimeLink.save();
    res.status(200).json({  token  });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create one-time link' });
  }
};
