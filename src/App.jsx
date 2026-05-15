import { useState } from 'react';
import './App.css';
import DecksScreen from './components/DecksScreen';
import Header from './components/Header';
import SetsScreen from './components/SetsScreen';
import StudyScreen from './components/StudyScreen';

const baseDecks = [
  {
    id: 1,
    type: 'deck',
    title: 'Coding',
    meta: 'Last studied 2d ago',
    sets: [
      {
        id: 101,
        title: 'React',
        cardCount: 8,
        meta: '3 due today',
        cards: [
          {
            id: 1,
            question: 'What will happen?',
            code: '{isValid && <p>my cat</p>}',
            answer:
              'If isValid is true, React renders the paragraph. If false, React renders nothing.',
          },
          {
            id: 2,
            question: 'Why should we use keys in lists?',
            code: 'items.map((item) => <li key={item.id}>{item.name}</li>)',
            answer:
              'Keys help React identify which items changed, were added, or removed during rerenders.',
          },
          {
            id: 3,
            question: 'What is props in React?',
            code: '<Profile name="Sophie" />',
            answer:
              'Props are values passed from a parent component to a child component.',
          },
          {
            id: 4,
            question: 'What does useState return?',
            code: 'const [count, setCount] = useState(0)',
            answer:
              'useState returns the current state value and a function to update it.',
          },
          {
            id: 5,
            question: 'What happens when state changes?',
            code: 'setCount(count + 1)',
            answer:
              'React rerenders the component with the updated state value.',
          },
          {
            id: 6,
            question: 'What is conditional rendering?',
            code: '{isLoggedIn ? <Dashboard /> : <Login />}',
            answer:
              'Conditional rendering shows different UI depending on a condition.',
          },
          {
            id: 7,
            question: 'Why do we use components?',
            code: '<Button />',
            answer:
              'Components help split the UI into reusable and manageable pieces.',
          },
          {
            id: 8,
            question: 'What is the virtual DOM?',
            code: '',
            answer:
              'The virtual DOM is a lightweight JavaScript representation of the real DOM.',
          },
        ],
      },
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
    type: 'deck',
    title: 'Nature',
    meta: 'New',
    sets: [
      { id: 201, title: 'Plants', cardCount: 8, meta: 'New' },
      { id: 202, title: 'Animals', cardCount: 10, meta: 'New' },
    ],
  },
  {
    id: 3,
    type: 'deck',
    title: 'Art',
    meta: '5 due today',
    sets: [
      { id: 301, title: 'Paintings', cardCount: 2, meta: 'New' },
      { id: 302, title: 'Artists', cardCount: 7, meta: 'New' },
    ],
  },
  {
    id: 4,
    type: 'deck',
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
  type: 'deck',
  title: 'All',
  sets: allSets,
  cardCount: totalCards,
  meta: 'All cards',
};

const allCategorySets = {
  id: 405,
  title: 'All Sets',
  cardCount: totalCards,
  meta: 'All cards',
};
const decks = [...baseDecks, allDeck];

function App() {
  const [screen, setScreen] = useState('decks');
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [selectedSet, setSelectedSet] = useState(null);

  function handleSelectDeck(current) {
    setSelectedDeck(current);
    console.log(current);
    setScreen('sets');
    console.log(screen);
  }

  function handleSelectSet(current) {
    setSelectedSet(current);
    console.log(current);
    setScreen('study');
    console.log(screen);
  }

  return (
    <div>
      <Header />
      {screen === 'decks' && (
        <DecksScreen
          decks={decks}
          deck={selectedDeck}
          onSelectDeck={handleSelectDeck}
        />
      )}
      {screen === 'sets' && (
        <SetsScreen
          sets={selectedDeck.sets}
          selectedDeck={selectedDeck}
          set={selectedSet}
          onSelectSet={handleSelectSet}
        />
      )}
      {screen === 'study' && <StudyScreen selectedSet={selectedSet} />}
    </div>
  );
}

export default App;
