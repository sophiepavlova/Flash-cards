import StudyIntro from './StudyIntro';
import MenuList from './MenuList';

export default function SetsScreen({ sets, selectedDeck, onSelectSet }) {
  const totalCards = sets.reduce((sum, set) => {
    return sum + set.cardCount;
  }, 0);

  const allSet = {
    id: 'all-sets',
    title: 'All',
    cardCount: totalCards,
    meta: 'All cards in this deck',
  };

  const setsWithAll = [...sets, allSet];

  return (
    <div className='container'>
      <StudyIntro selectedDeck={selectedDeck} />
      <MenuList items={setsWithAll} onSelectItem={onSelectSet} />
    </div>
  );
}
