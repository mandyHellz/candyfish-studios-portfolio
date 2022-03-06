import { motion } from "framer-motion";
import { useState } from "react";
import { fade, slowFade } from "../../animations/animation";

const Question = ({
  question,
  answerTitle,
  answer,
}: {
  question: string;
  answerTitle?: string;
  answer: string;
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <motion.div layout className="question">
        <motion.p
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer py-8 text-xl md:text-2xl font-bold"
          layout
        >
          {question}
        </motion.p>
        {toggle && (
          <motion.div
            layout
            variants={slowFade}
            initial="hidden"
            animate="show"
            className="answer py-4 flex flex-col gap-4 text-gray-400"
          >
            <p>{answerTitle}</p>
            <p>{answer}</p>
          </motion.div>
        )}
        <div className="faq-line border-b border-gray-50 w-full"></div>
      </motion.div>
    </>
  );
};

export default Question;
