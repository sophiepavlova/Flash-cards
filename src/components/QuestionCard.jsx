import { useRef, useState, useEffect } from 'react';

export default function QuestionCard({ currentCard }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [audioPlayer, setAudioPlayer] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  function handleNextImage() {
    currentImageIndex < currentCard.images.length - 1
      ? setCurrentImageIndex(currentImageIndex + 1)
      : setCurrentImageIndex(0);
  }

  // 🦊 When button is clicked the song plays, until it is over.
  function handlePlayAudio() {
    if (audioRef.current === null) {
      const audio = new Audio(currentCard.audio);

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        audioRef.current = null;
      });
      audio.play();
      audioRef.current = audio;
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
    }
  }
  return (
    <div className='question-card'>
      <h1 className='question-category'>✦ Question</h1>
      <h2 className='question-general'>{currentCard.question}</h2>
      {currentCard.code && <p className='kode-mono'>{currentCard.code}</p>}
      {currentCard.audio && (
        <button className='sound-btn btn' onClick={handlePlayAudio}>
          {isPlaying ? `Stop the chirping` : `Play bird song`}
        </button>
      )}
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
