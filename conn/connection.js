import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Connected to the  Database".bgGreen.white);
    });
  } catch (error) {
    console.log("Cannot connect to  Database".bgRed, error);
    return res.status(400).json({
      success: false,
      message: "Cannot connect to Database",
    });
  }
};
