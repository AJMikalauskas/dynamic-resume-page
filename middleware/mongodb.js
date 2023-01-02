import mongoose from "mongoose";

// Curious About converting this...?
const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.mongodburl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });
    return handler(req, res);
  };
export default connectDB;