import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import React from "react";
import Metric from "../shared/Metric";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import EditDeleteAction from "../shared/EditDeleteAction";
interface Props {
  _id: string;
  question: {
    _id: string;
    title: string;
  };
  author:
    | {
        _id: string;
        name: string;
        picture: string;
      }
    | Array<{
        _id: string;
        name: string;
        picture: string;
      }>;
  upvotes: string[];
  createdAt: Date;
  clerkId?: string | null;
}

const AnswerCard = ({
  clerkId,
  _id,
  question,
  author,
  upvotes,
  createdAt,
}: Props) => {
  const authorName = Array.isArray(author) ? author[0].name : author.name;

  const showActionButtons = clerkId && (
    (Array.isArray(author) && author.length > 0 && 'clerkId' in author[0] && clerkId === author[0].clerkId) ||
    (!Array.isArray(author) && 'clerkId' in author && clerkId === author.clerkId)
  );

  // console.log("answer card:", question);

  return (
    <Link
      href={`/question/${
        Array.isArray(question) ? question[0]._id : question._id
      }/#${_id}`}
      className="card-wrapper rounded-[10px] px-11 py-9"
    >
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>

          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
            {Array.isArray(question) ? question[0].title : question.title}
          </h3>
        </div>
        <SignedIn>
          {showActionButtons && (
            <EditDeleteAction type="Answer" itemId={JSON.stringify(_id)} />
          )}
        </SignedIn>
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={Array.isArray(author) ? author[0].picture : author.picture}
          alt="user"
          value={authorName}
          title={`-asked ${getTimestamp(createdAt)}`}
          href={`/profile/${
            Array.isArray(author) ? author[0]._id : author._id
          }`}
          isAuthor
          textStyles="small-medium text-dark400_light800"
        />

        <div className="flex-center gap-3">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatAndDivideNumber(upvotes.length)}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </Link>
  );
};

export default AnswerCard;
