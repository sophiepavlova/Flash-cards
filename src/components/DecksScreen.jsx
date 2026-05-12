import StudyIntro from './StudyIntro';
import MenuList from './MenuList';

export default function DecksScreen({ decks, onSelectDeck }) {
  return (
    <div className='container'>
      <StudyIntro />
      <MenuList decks={decks} onSelectDeck={onSelectDeck} />
    </div>
  );
}
