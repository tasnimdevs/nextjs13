import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const topQuestions = [
  {
    _id: 1,
    title: "How do i use expresshohow do i use expressw do i use express?",
  },
  { _id: 2, title: "Do i use expresshow do i use express?" },
  {
    _id: 3,
    title: "I usehow do i use expresshow do i use express express",
  },
  {
    _id: 4,
    title: "Use how do i use expresshow do i use expressexpress",
  },
];

const poulerTags = [
  { _id: 1, name: "javascript", totalQuestions: 7 },
  { _id: 2, name: "react", totalQuestions: 5 },
  { _id: 3, name: "nextJs", totalQuestions: 3 },
  { _id: 4, name: "redux", totalQuestions: 5 },
  { _id: 5, name: "vue", totalQuestions: 2 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Populer Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {poulerTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
