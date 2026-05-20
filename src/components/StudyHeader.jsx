import { ArrowLeft } from 'lucide-react';
export default function StudyHeader({
  selectedSet,
  currentCardNumber,
  onBack,
  screen,
}) {
  const progressPercent = selectedSet
    ? ((currentCardNumber + 1) / selectedSet.cardCount) * 100
    : 0;

  return (
    <div className='study-header'>
      <div
        className={
          screen === 'results'
            ? 'study-header-top no-arrow'
            : 'study-header-top'
        }
      >
        {screen !== 'results' && <ArrowLeft size={24} onClick={onBack} />}
        {selectedSet && (
          <div className='study-header-numbers'>
            {selectedSet.title} {currentCardNumber + 1}/{selectedSet.cardCount}
          </div>
        )}
      </div>

      {screen !== 'results' && selectedSet && (
        <div className='progress-bar'>
          <div
            className='progress-fill'
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
