import StudyIntro from './StudyIntro';
import MenuList from './MenuList';
import StudyHeader from './StudyHeader';

export default function SetsScreen({
  sets,
  selectedDeck,
  onSelectSet,
  onBack,
}) {
  return (
    <div className='container'>
      <StudyHeader onBack={onBack} />
      <StudyIntro selectedDeck={selectedDeck} />
      <MenuList items={sets} onSelectItem={onSelectSet} />
    </div>
  );
}
