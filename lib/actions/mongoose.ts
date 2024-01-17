import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }
  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName:"devflow",
    });
    isConnected = true;
    console.log("mongobd is connected");
  } catch (error) {
    console.log("Mongodb connection failed:", error);
  }
};


/* import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }
  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    mongoose.connection.once("open", () => {
      isConnected = true;
      console.log("MongoDB is connected");
    });
  } catch (error) {
    console.error("Mongodb connection failed:", error);
  }
}; */

