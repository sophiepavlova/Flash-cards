import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';
import StudyHeader from './StudyHeader';
import { useState } from 'react';
export default function StudyScreen({
  selectedSet,
  onBack,
  showResultsScreen,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  function handleRevealButton() {
    setShowAnswer(true);
  }

  function handleRateQuestion(rate) {
    const newAnswers = [...answers, { cardId: currentCard.id, rating: rate }];

    setShowAnswer(false);
    setAnswers(newAnswers);
    console.log(newAnswers);

    currentCardIndex < selectedSet.cards.length - 1 &&
      setCurrentCardIndex(currentCardIndex + 1);
    if (currentCardIndex === selectedSet.cards.length - 1) {
      showResultsScreen();
    }
  }

  function handleBack() {
    setShowAnswer(false);
    onBack();
  }

  const currentCard = selectedSet.cards[currentCardIndex];
  return (
    <div className='container'>
      <div className='study-screen'>
        <StudyHeader
          selectedSet={selectedSet}
          currentCardNumber={currentCardIndex}
          onBack={handleBack}
        />
        <QuestionCard currentCard={currentCard} />
        {!showAnswer && (
          <button className='reveal-btn btn' onClick={handleRevealButton}>
            Reveal answer
          </button>
        )}
        {showAnswer && <AnswerCard currentCard={currentCard} />}
        {showAnswer && (
          <div className='ratings'>
            <h2 className='ratings-title'>How well did you know this?</h2>
            <div className='ratings-container'>
              <div
                className='rating-container'
                onClick={() => handleRateQuestion('No idea')}
              >
                <div className='icon icon-empty'></div>
                <p className='rating-title'>No idea</p>
                <p className='rating-subtitle'>Review again</p>
              </div>

              <div
                className='rating-container'
                onClick={() => handleRateQuestion('Unsure')}
              >
                <div className='icon icon-half'></div>
                <p className='rating-title'>Unsure</p>
                <p className='rating-subtitle'>Getting there</p>
              </div>

              <div
                className='rating-container'
                onClick={() => handleRateQuestion('Knew it')}
              >
                <div className='icon icon-full'></div>
                <p className='rating-title'>Knew it</p>
                <p className='rating-subtitle'>Well done!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
