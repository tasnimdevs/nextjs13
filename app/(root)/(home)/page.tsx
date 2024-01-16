import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilter";
import Filters from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const question = [
  {
    _id: "1",
    title: "Cascading Delete in SQLalchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe-picture-url",
    },
    upvotes: 10000,
    views: 100000,
    answers: [
      { /* Answer 1 properties */ },
      { /* Answer 2 properties */ },
    ],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "What is React Router Dom?",
    tags: [
      { _id: "1", name: "next" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "2",
      name: "Kamal hassan",
      picture: "kamal-picture-url",
    },
    upvotes: 20000,
    views: 158000,
    answers: [
      { /* Answer 1 properties */ },
      { /* Answer 2 properties */ },
    ],
    createdAt: new Date("2022-09-01T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How to Center a div?",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "2",
      name: "Rakib islam",
      picture: "kamal-picture-url",
    },
    upvotes: 15000,
    views: 1000000,
    answers: [
      { /* Answer 1 properties */ },
      { /* Answer 2 properties */ },
    ],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];




export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {question.length > 0 ? (
          question.map((question) => (
            <QuestionCard
              key={question._id}
              title={question.title}
              _id={question._id}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title=" There's no question to show"
            description=" Be the first to break silence!
      Ask a question and kickstart the
        discussion. our query could bethe next big thing ohters learn from. Get
        Involeved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
