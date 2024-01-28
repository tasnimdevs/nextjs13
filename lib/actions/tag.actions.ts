"use server";

import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types.d";

import { connectToDatabase } from "./mongoose";
import User from "@/database/user.model";
import Tag from "@/database/tag.model";

export async function GetTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("user not found in tag action page");

    return [
      { _id: "1", name: "tag" },
      { _id: "2", name: "tag2" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    /*  const {page=1, pageSize=20, filter,serchQuery}=params; */

    const tags = await Tag.find({});
    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
