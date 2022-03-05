import { motion } from "framer-motion";
import { useState } from "react";
import { fade } from "../../animations/animation";

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
          className="cursor-pointer py-8 text-2xl font-bold"
        >
          {question}
        </motion.p>
        {toggle ? (
          <motion.div
            variants={fade}
            className="answer py-4 flex flex-col gap-4 text-gray-400"
          >
            <motion.p>{answerTitle}</motion.p>
            <motion.p>{answer}</motion.p>
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      <div className="faq-line border-b border-gray-50 w-full"></div>
    </>
  );
};

export default Question;
