import Question from "./QuestionSection";

const FaqSection = () => {
  return (
    <>
      <div className="faq">
        <p>
          Any Questions <span>FAQ</span>
        </p>
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
    </>
  );
};

export default FaqSection;
