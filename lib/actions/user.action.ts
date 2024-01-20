"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "./mongoose";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    console.log("UserId:", userId);

    const user = await User.findOne({ clerkId: userId });
    console.log("async user:", user);

 

    return user;
  } catch (error) {
    console.error("Error during user retrieval:", error);
    throw error;
  }
}
