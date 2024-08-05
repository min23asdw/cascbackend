import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  university_id: { type: String, required: true },
  university_name: { type: String, required: true },
});
 
export const University = mongoose.model('University', universitySchema);