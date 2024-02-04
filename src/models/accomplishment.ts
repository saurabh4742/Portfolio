import mongoose, { Schema, Document } from 'mongoose';

interface IAccomplishment extends Document {
  admin: string;
  accomplishments: Array<string>;
}

const accomplishmentsSchema: Schema = new Schema({
  admin: {unique:true, type: String, required: true },
  accomplishments: [{ type: String, required: true }],
});
let Accomplishment: mongoose.Model<IAccomplishment>;

try {
  Accomplishment = mongoose.model<IAccomplishment>('Accomplishment');
} catch {
  Accomplishment = mongoose.model<IAccomplishment>('Accomplishment', accomplishmentsSchema);
}

export default Accomplishment;
