import mongoose, { Schema, Document } from 'mongoose';

interface IProfile extends Document {
  admin: string;
  name: string;
  home: string;
  college: string;
  phone: string;
  email: string;
}

const profileSchema: Schema = new Schema({
  admin: { unique: true, type: String, required: true },
  name: { type: String, required: true },
  home: { type: String, required: true },
  college: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

let Profile: mongoose.Model<IProfile>;

try {
  Profile = mongoose.model<IProfile>('Profile');
} catch {
  Profile = mongoose.model<IProfile>('Profile', profileSchema);
}

export default Profile;
