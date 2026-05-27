export default function QuestionCard({ currentCard }) {
  return (
    <div className='question-card'>
      <h1 className='question-category'>✦ Question</h1>
      <h2 className='question-general'>{currentCard.question}</h2>
      {currentCard.code && <p className='kode-mono'>{currentCard.code}</p>}
      {currentCard.images && (
        <img src={currentCard.images[0]} className='card-image' />
      )}
    </div>
  );
}
