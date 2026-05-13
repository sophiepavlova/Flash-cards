export default function StudyIntro({ selectedDeck }) {
  return (
    <div className='intro'>
      <h1 className='intro-greating'>GOOD AFTERNOON</h1>
      <h2 className='intro-heading'>What are we studying today?</h2>
      <h3 className='intro-decks'>
        Your {selectedDeck?.title} {selectedDeck ? 'Sets' : 'Decks'}
      </h3>
    </div>
  );
}
