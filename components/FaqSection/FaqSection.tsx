import Question from "./QuestionSection";

const FaqSection = () => {
  return (
    <>
      <div className="faq min-w-xs min-h-90 px-5 xl:px-16 py-20 text-center md:text-left">
        <p className="pb-20 overflow-hidden leading-none text-4xl md:text-6xl">
          Any Questions <span>FAQ</span>
        </p>
        <div className="questions">
          <Question
            question="How do I start?"
            answerTitle="Lorem ipsum dolor sit amet"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam!"
          />
          <Question
            question="Daily schedule"
            answerTitle="Lorem ipsum dolor sit amet"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam!"
          />
          <Question
            question="Payment methods"
            answerTitle="Lorem ipsum dolor sit amet"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam!"
          />
          <Question
            question="What products do you offer?"
            answerTitle="Lorem ipsum dolor sit amet"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam!"
          />
        </div>
      </div>
    </>
  );
};

export default FaqSection;
