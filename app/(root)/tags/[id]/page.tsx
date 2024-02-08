import QuestionCard from '@/components/cards/QuestionCard'
import NoResult from '@/components/shared/NoResult'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import { IQuestion } from '@/database/question.model'
import { getQuestionByTagId } from '@/lib/actions/tag.actions'
import { URLProps } from '@/types'
import React from 'react'

const Page = async({params, searchParams}:URLProps) => {
    const result = await getQuestionByTagId({
        tagId:params.id,
        page:1,
        searchQuery:searchParams.q
    })

    console.log("tag title:",result.questions[0]._id);
    
  return (
    <>
    <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>
    <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
      <LocalSearchbar
        route="/"
        iconPosition="left"
        imgSrc="/assets/icons/search.svg"
        placeholder="Search for tag questions"
        otherClasses="flex-1"
      />
     
    </div>

    <div className="mt-10 flex w-full flex-col gap-6">
      {result.questions.length > 0 ? (
        result.questions.map((question:IQuestion) => (
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
          title=" There's no tag question to show"
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
  )
}

export default Page