import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { University } from '../models/universityModel';

 

export const getAllUniversities = async (req: Request, res: Response) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
