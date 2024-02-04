import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  admin: string;
  projects: Array<{
    gitSrc: string;
    liveUrl: string;
    bgSrc: string;
    prjTitle:string;
  }>;
}

const projectSchema: Schema = new Schema({
  admin: {unique:true, type: String, required: true },
  projects: [{
    gitSrc: { type: String, required: true },
    liveUrl: { type: String, required: true },
    bgSrc: { type: String, required: true },
    prjTitle:{ type: String, required: true }
  }],
});

let Project: mongoose.Model<IProject>;

try {
  Project = mongoose.model<IProject>('Project');
} catch {
  Project = mongoose.model<IProject>('Project', projectSchema);
}

export default Project;
