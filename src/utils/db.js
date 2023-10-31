import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURL = process.env.MONGO_URL;
    console.log(dbURL)
    const connection = await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectDB;
