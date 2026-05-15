export default function QuestionCard({ currentCard }) {
  return (
    <div className='question-card'>
      <h1 className='question-category'>QUESTION</h1>
      <h2 className='question-general'>{currentCard.question}</h2>
      <p className='kode-mono'>{currentCard.code}</p>
    </div>
  );
}
