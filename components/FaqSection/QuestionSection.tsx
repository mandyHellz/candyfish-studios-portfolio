const Question = ({
  question,
  answerTitle,
  answer,
}: {
  question: string;
  answerTitle?: string;
  answer: string;
}) => {
  return (
    <>
      <div className="question">
        <p className="cursor-pointer py-8 text-2xl font-bold">{question}</p>
        <div className="answer py-4 flex flex-col gap-4 text-gray-400">
          <p>{answerTitle}</p>
          <p>{answer}</p>
        </div>
      </div>
      <div className="faq-line border-b border-gray-50 w-full"></div>
    </>
  );
};

export default Question;
