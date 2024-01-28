"use server";

import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  UpdateUserParams,
} from "./shared.types.d";

import User from "@/database/user.model";
import { connectToDatabase } from "./mongoose";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    console.log("UserId:", userId);

    const user = await User.findOne({ clerkId: userId }).exec();
    console.log("await user:", user);
    return user;
  } catch (error) {
    console.error("Error during user retrieval:", error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);

    console.log("succes update user");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }

    /*   const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    ); */

    // Add await here
    await Question.deleteMany({ author: user._id });

    // Fix variable name here
    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser; // Fix variable name here
  } catch (error) {
    console.error("Error during user deletion:", error);
    throw error;
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    connectToDatabase();
    /*  const {page=1, pageSize=20, filter,serchQuery}=params; */

    const users = await User.find({})
    .sort({ createdAt: -1 });
    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

