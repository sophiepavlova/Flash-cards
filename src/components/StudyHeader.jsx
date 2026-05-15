import { ArrowLeft } from 'lucide-react';
export default function StudyHeader({ selectedSet }) {
  return (
    <div className='study-header'>
      <div className='study-header-top'>
        <ArrowLeft size={24} />
        {selectedSet !== '' && (
          <div className='study-header-numbers'>
            {selectedSet.title} 7/{selectedSet.cardCount}
          </div>
        )}
      </div>

      {selectedSet !== '' && (
        <div className='progress-bar'>
          <div className='progress-fill'></div>
        </div>
      )}
    </div>
  );
}
