import { useState } from 'react';
import './App.css';
import DecksScreen from './components/DecksScreen';
import Header from './components/Header';

const baseDecks = [
  {
    id: 1,
    title: 'Coding',
    meta: 'Last studied 2d ago',
    sets: [
      { id: 101, title: 'React', cardCount: 12, meta: '3 due today' },
      {
        id: 102,
        cardCount: 0,
        title: 'JavaScript',
        meta: 'Last studied 1d ago',
      },
      { id: 103, title: 'CSS', cardCount: 10, meta: 'New' },
    ],
  },
  {
    id: 2,
    title: 'Nature',
    meta: 'New',
    sets: [
      { id: 201, title: 'Plants', cardCount: 8, meta: 'New' },
      { id: 202, title: 'Animals', cardCount: 10, meta: 'New' },
    ],
  },
  {
    id: 3,
    title: 'Art',
    meta: '5 due today',
    sets: [
      { id: 301, title: 'Paintings', cardCount: 2, meta: 'New' },
      { id: 302, title: 'Artists', cardCount: 7, meta: 'New' },
    ],
  },
  {
    id: 4,
    title: 'General Knowledge',
    meta: '3 overdue',
    sets: [
      { id: 401, title: 'Geography', cardCount: 18, meta: 'New' },
      { id: 402, title: 'History', cardCount: 3, meta: 'New' },
      { id: 403, title: 'Music', cardCount: 13, meta: 'New' },
    ],
  },
];

const totalCards = baseDecks.reduce((sum, deck) => {
  const deckTotal = deck.sets.reduce((sum, set) => {
    return sum + set.cardCount;
  }, 0);

  return sum + deckTotal;
}, 0);

const allSets = baseDecks.flatMap((deck) => deck.sets);

const allDeck = {
  id: 'all',
  title: 'All',
  sets: allSets,
  cardCount: totalCards,
  meta: 'All cards',
};

const decks = [...baseDecks, allDeck];

function App() {
  const [selectedDeck, setSelectedDeck] = useState(null);

  function handleSelectDeck(current) {
    setSelectedDeck(current);
    console.log(current);
  }
  return (
    <div>
      <Header />
      <DecksScreen
        decks={decks}
        deck={selectedDeck}
        onSelectDeck={handleSelectDeck}
      />
    </div>
  );
}

export default App;
