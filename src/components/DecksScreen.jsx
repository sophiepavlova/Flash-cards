import StudyIntro from './StudyIntro';
import MenuList from './MenuList';

export default function DecksScreen({ decks, onSelectDeck }) {
  return (
    <div className='container'>
      <StudyIntro />
      <div className='list-with-picture'>
        <MenuList items={decks} onSelectItem={onSelectDeck} />
        <img className='list-illustration' src='/images/puddington2.webp'></img>
      </div>
    </div>
  );
}
