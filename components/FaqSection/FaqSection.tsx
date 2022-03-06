import Question from "./QuestionSection";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { scrollReveal } from "../../animations/animation";

const FaqSection = () => {
  // const [element, controls] = useScroll();
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  view ? controls.start("show") : controls.start("hidden");

  return (
    <>
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
        className="faq min-h-90vh py-20 text-center md:text-left"
      >
        <div className="pb-20 overflow-hidden leading-none text-3xl md:text-6xl">
          <p>Any Questions</p>
          <span>FAQ</span>
        </div>
        <div className="questions flex flex-col gap-8">
          <AnimateSharedLayout>
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
          </AnimateSharedLayout>
        </div>
      </motion.div>
    </>
  );
};

export default FaqSection;
