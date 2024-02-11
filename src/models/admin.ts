import mongoose, { Schema, Document } from 'mongoose';

interface IAdmin extends Document {
    username: string;
    password: string;

}

const adminSchema: Schema = new Schema({
    username: { unique: true, type: String, required: true },
    password: { type: String, required: true },
});

let Admin: mongoose.Model<IAdmin>;

try {
    Admin = mongoose.model<IAdmin>('Admin');
} catch {
    Admin = mongoose.model<IAdmin>('Admin', adminSchema);
}

export default Admin;
