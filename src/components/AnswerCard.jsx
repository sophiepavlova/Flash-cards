export default function AnswerCard({ currentCard }) {
  return (
    <div className='answer-card'>
      <h1 className='answer-category'>◈ ANSWER</h1>
      <h2 className='answer-general'>{currentCard.answer}</h2>
      {currentCard.facts && (
        <ul className='facts-list'>
          {currentCard.facts.map((fact, index) => (
            <li className='fact-item' key={index}>
              ✦ {fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
