import StudyHeader from './StudyHeader';
import { PieChart, Pie, Cell } from 'recharts';
import StudyScreen from './StudyScreen';

export default function ResultsScreen({
  selectedSet,
  handleBack,
  answers,
  setScreen,
  handleResetAnswers,
}) {
  const COLORS = [
    'var(--color-knew-it)',
    'var(--color-unsure)',
    'var(--color-no-idea)',
  ];
  const total = selectedSet.cardCount;
  const knewItCount = answers.filter(
    (answer) => answer.rating === 'Knew it',
  ).length;
  const unsureCount = answers.filter(
    (answer) => answer.rating === 'Unsure',
  ).length;
  const noIdeaCount = answers.filter(
    (answer) => answer.rating === 'No idea',
  ).length;
  const knewItPercent = Math.round((knewItCount / total) * 100);
  const unsurePercent = Math.round((unsureCount / total) * 100);
  const noIdeaPercent = Math.round((noIdeaCount / total) * 100);
  const data = [
    { name: 'Knew it', value: knewItPercent },
    { name: 'Unsure', value: unsurePercent },
    { name: 'No Idea', value: noIdeaPercent },
  ];

  function handleStudyAgain() {
    handleResetAnswers();
    setScreen('study');
  }

  function handleChooseAnotherSet() {
    handleResetAnswers();
    setScreen('sets');
  }
  return (
    <div className='results-screen'>
      <div className='container'>
        <div className='study-screen'>
          <StudyHeader
            selectedSet={selectedSet}
            currentCardNumber={selectedSet.cardCount - 1}
            onBack={handleBack}
            screen='results'
          />
        </div>
        <h2 className='intro-heading'>Session is complete</h2>
        <div className='results-body'>
          <div className='diagram'>
            <PieChart width={386} height={386}>
              <Pie
                data={data}
                dataKey='value'
                innerRadius={70}
                outerRadius={150}
                stroke='none'
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
            <div>
              <div className='percents'>
                <div className='percents-left'>
                  <div className='cirlce knew-it'></div>
                  <p className='percents-text'>Knew it</p>
                </div>
                <div className='percent-value'>{knewItPercent || 0} %</div>
              </div>
              <div className='percents'>
                <div className='percents-left'>
                  <div className='cirlce unsure'></div>
                  <p className='percents-text'>Unsure</p>
                </div>
                <div className='percent-value'>{unsurePercent || 0} %</div>
              </div>
              <div className='percents'>
                <div className='percents-left'>
                  <div className='cirlce no-idea'></div>
                  <p className='percents-text'>No Idea</p>
                </div>
                <div className='percent-value'>{noIdeaPercent || 0} %</div>
              </div>
            </div>
          </div>
          <div className='results-btns'>
            <button className='results-btn btn' onClick={handleStudyAgain}>
              Study again
            </button>
            <button
              className='results-btn btn'
              onClick={handleChooseAnotherSet}
            >
              Choose another set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
