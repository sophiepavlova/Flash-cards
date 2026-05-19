import { ArrowLeft } from 'lucide-react';
export default function StudyHeader({
  selectedSet,
  currentCardNumber,
  onBack,
}) {
  return (
    <div className='study-header'>
      <div className='study-header-top'>
        <ArrowLeft size={24} onClick={onBack} />
        {selectedSet && (
          <div className='study-header-numbers'>
            {selectedSet.title} {currentCardNumber + 1}/{selectedSet.cardCount}
          </div>
        )}
      </div>

      {selectedSet && (
        <div className='progress-bar'>
          <div className='progress-fill'></div>
        </div>
      )}
    </div>
  );
}
