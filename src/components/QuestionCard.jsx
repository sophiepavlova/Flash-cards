export default function QuestionCard({ currentCard }) {
  return (
    <div className='question-card'>
      <h1 className='question-category'>QUESTION</h1>
      <h2 className='question-general'>{currentCard.question}</h2>
      {currentCard.code && <p className='kode-mono'>{currentCard.code}</p>}
      {currentCard.image && (
        <img src={currentCard.image} className='card-image'></img>
      )}
    </div>
  );
}
