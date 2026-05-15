import StudyHeader from './StudyHeader';
export default function StudyScreen({ selectedSet, onBack }) {
  const currentCard = selectedSet.cards[0];
  return (
    <div className='container'>
      <div className='study-screen'>
        <StudyHeader selectedSet={selectedSet} onBack={onBack} />
        <div className='question-card'>
          <h1 className='question-category'>QUESTION</h1>
          <h2 className='question-general'>{currentCard.question}</h2>
          <p className='kode-mono'>{currentCard.code}</p>
        </div>
      </div>
    </div>
  );
}
