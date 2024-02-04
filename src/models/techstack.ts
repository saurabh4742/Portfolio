import mongoose, { Schema, Document } from 'mongoose';

interface ITechStack extends Document {
  admin: string;
  techstacks: Array<{
    bgSrc: string;
    officialUrl: string;
    alt: string;
  }>;
}

const techStackSchema: Schema = new Schema({
  admin: {unique:true, type: String, required: true },
  techstacks: [{
    alt: { type: String, required: true },
    officialUrl: { type: String, required: true },
    bgSrc: { type: String, required: true },
  }],
});

let TechStack: mongoose.Model<ITechStack>;

try {
  TechStack = mongoose.model<ITechStack>('TechStack');
} catch {
  TechStack = mongoose.model<ITechStack>('TechStack', techStackSchema);
}

export default TechStack;
