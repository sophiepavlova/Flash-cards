export default function AnswerCard({ currentCard }) {
  return (
    <div className='answer-card'>
      <h1 className='answer-category'>ANSWER</h1>
      <h2 className='answer-general'>{currentCard.answer}</h2>
    </div>
  );
}
