import Question from "@/components/card/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title:'Question | DevFlow',
  description: 'Dev OverFlow is a community of 1,000,000+ developers. Join us.',
}

const AskQuestion = async () => {
  const { userId } = auth();
  // const userId = "123456";
    console.log("id from auth:",userId);
  
if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });
  console.log("mongo user:", mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser)} />
      </div>
    </div>
  );
};

export default AskQuestion;
