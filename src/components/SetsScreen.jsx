import StudyIntro from './StudyIntro';
import MenuList from './MenuList';

export default function SetsScreen({ sets, selectedDeck, onSelectSet }) {
  console.log(selectedDeck);
  return (
    <div className='container'>
      <StudyIntro selectedDeck={selectedDeck} />
      <MenuList items={sets} onSelectItem={onSelectSet} />
    </div>
  );
}
