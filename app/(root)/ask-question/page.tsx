import Question from "@/components/card/Question";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  // const { userId } = auth();
  const userId = "123456";

  if (!userId) {
    redirect("/sign-in");
  } else {
    const mongoUser = await getUserById({ userId });
    console.log("mongo user:", mongoUser);
  }

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};

export default AskQuestion;
