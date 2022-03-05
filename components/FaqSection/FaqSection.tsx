import Question from "./QuestionSection";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <>
      <div className="faq min-w-xs min-h-90vh py-20 text-center md:text-left">
        <div className="pb-20 overflow-hidden leading-none text-4xl md:text-6xl">
          <p>Any Questions</p>
          <span>FAQ</span>
        </div>
        <AnimateSharedLayout>
          <div className="questions flex flex-col gap-8">
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
        </AnimateSharedLayout>
      </div>
    </>
  );
};

export default FaqSection;
