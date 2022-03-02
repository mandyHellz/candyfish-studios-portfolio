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
    <div className="question">
      <p>{question}</p>
      <div className="answer">
        <p>{answerTitle}</p>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
