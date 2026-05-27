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
      <div className='list-with-picture'>
        <MenuList items={sets} onSelectItem={onSelectSet} />
        <img
          className='list-illustration list-illustration-no-reflect'
          src='/images/puddington3.webp'
        ></img>
      </div>
    </div>
  );
}
