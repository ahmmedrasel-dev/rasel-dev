import mongoose from "mongoose";

const connectDB = async () => {
  const connection = mongoose.connection;

  if (connection.readyState === 1) {
    console.log("MongoDB is already connected");
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected!");
};

export default connectDB;
