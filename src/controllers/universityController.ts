import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { University } from '../models/universityModel';
import OneTimeLink from '../models/OneTimeLink';

 

export const getAllUniversities = async (req: Request, res: Response) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


export const getUniversityByToken = async (req: Request, res: Response) => {
  const { token } = req.params;

  try {
    const oneTimeLink = await OneTimeLink.findOne({ token });
    if (!oneTimeLink) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    const university = await University.findOne({ university_id: oneTimeLink.university_id });
    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }

    res.status(200).json({ university });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve university data' });
  }
};