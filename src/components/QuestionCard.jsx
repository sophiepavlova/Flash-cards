import { useState } from 'react';

export default function QuestionCard({ currentCard }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  function handleNextImage() {
    currentImageIndex < currentCard.images.length - 1
      ? setCurrentImageIndex(currentImageIndex + 1)
      : setCurrentImageIndex(0);
  }
  return (
    <div className='question-card'>
      <h1 className='question-category'>✦ Question</h1>
      <h2 className='question-general'>{currentCard.question}</h2>
      {currentCard.code && <p className='kode-mono'>{currentCard.code}</p>}
      {currentCard.images.length > 0 && (
        <img
          src={currentCard.images[currentImageIndex]}
          className='card-image'
          onClick={handleNextImage}
        />
      )}
    </div>
  );
}
