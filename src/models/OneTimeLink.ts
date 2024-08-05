import mongoose, { Document, Schema } from 'mongoose';

interface IOneTimeLink extends Document {
  token: string;
  university_id: string;
}

const oneTimeLinkSchema: Schema = new Schema({
  token: { type: String, required: true, unique: true },
  university_id: { type: Schema.Types.ObjectId, ref: 'University', required: true }
});

const OneTimeLink = mongoose.model<IOneTimeLink>('OneTimeLink', oneTimeLinkSchema);

export default OneTimeLink;