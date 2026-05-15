import QuestionCard from './QuestionCard';
import StudyHeader from './StudyHeader';
export default function StudyScreen({ selectedSet, onBack }) {
  const currentCard = selectedSet.cards[0];
  return (
    <div className='container'>
      <div className='study-screen'>
        <StudyHeader selectedSet={selectedSet} onBack={onBack} />
        <QuestionCard currentCard={currentCard} />
        <button className='reveal-btn btn'>Reveal answer</button>
      </div>
    </div>
  );
}
