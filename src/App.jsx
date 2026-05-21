import { useState } from 'react';
import { baseDecks } from './data/decks.js';
import './App.css';
import DecksScreen from './components/DecksScreen';
import Header from './components/Header';
import SetsScreen from './components/SetsScreen';
import StudyScreen from './components/StudyScreen';
import ResultsScreen from './components/ResultsScreen';

// screen: 'decks' | 'sets' | 'study' | 'results'
// selectedDeck: deck object or null
// selectedSet: set object or null
// answers: [{ cardId: number, rating: 'No idea' | 'Unsure' | 'Knew it' }]

// deck = { id, title, meta, sets }
// set = { id, title, meta, cardCount, cards }
// card = { id, question, code, image, answer }

const totalCards = baseDecks.reduce((sum, deck) => {
  const deckTotal = deck.sets.reduce((sum, set) => {
    return sum + set.cardCount;
  }, 0);

  return sum + deckTotal;
}, 0);

const allSets = baseDecks.flatMap((deck) => deck.sets);

const allDeck = {
  id: 'all',
  type: 'deck',
  title: 'All',
  sets: allSets,
  cardCount: totalCards,
  meta: 'All sets',
};

const decks = [...baseDecks, allDeck];

function App() {
  const [screen, setScreen] = useState('decks');
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [selectedSet, setSelectedSet] = useState(null);
  const [answers, setAnswers] = useState([]);

  const allCardsInSelectedDeck = selectedDeck
    ? selectedDeck.sets.flatMap((set) => set.cards || [])
    : [];

  const allSetInSelectedDeck = {
    id: 'all-sets',
    title: 'All',
    cardCount: allCardsInSelectedDeck.length,
    meta: 'All cards',
    cards: allCardsInSelectedDeck,
  };

  const setsWithAll = selectedDeck
    ? [...selectedDeck.sets, allSetInSelectedDeck]
    : [];

  function handleSelectDeck(current) {
    setSelectedDeck(current);
    console.log(current);
    setScreen('sets');
    // console.log(screen);
  }

  function handleSelectSet(current) {
    setSelectedSet(current);
    console.log(current);
    setScreen('study');
    // console.log(screen);
  }

  function handleBackToDecks() {
    setScreen('decks');
  }
  function handleBackToSets() {
    setScreen('sets');
  }

  function showResultsScreen() {
    setScreen('results');
  }

  function handleResetAnswers() {
    setAnswers([]);
  }

  function handleGoHome() {
    setScreen('decks');
    setAnswers([]);
  }

  return (
    <div>
      <Header onGoHome={handleGoHome} />
      {screen === 'decks' && (
        <DecksScreen
          decks={decks}
          deck={selectedDeck}
          onSelectDeck={handleSelectDeck}
        />
      )}
      {screen === 'sets' && (
        <SetsScreen
          sets={setsWithAll}
          selectedDeck={selectedDeck}
          set={selectedSet}
          onSelectSet={handleSelectSet}
          onBack={handleBackToDecks}
        />
      )}
      {screen === 'study' && (
        <StudyScreen
          selectedSet={selectedSet}
          onBack={handleBackToSets}
          showResultsScreen={showResultsScreen}
          answers={answers}
          setAnswers={setAnswers}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen
          setScreen={setScreen}
          selectedSet={selectedSet}
          handleBack={handleBackToSets}
          answers={answers}
          handleResetAnswers={handleResetAnswers}
        />
      )}
    </div>
  );
}

export default App;
