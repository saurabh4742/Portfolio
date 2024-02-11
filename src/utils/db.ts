import mongoose from "mongoose";
const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Connected to MongoDB Atlas: ${connection.connection.host}`);
  } catch (error: any) {
    console.error(`Error connecting to MongoDB Atlas: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
