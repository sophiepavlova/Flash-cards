import StudyHeader from './StudyHeader';
import { PieChart, Pie, Cell } from 'recharts';

export default function ResultsScreen({ selectedSet, handleBack, answers }) {
  const COLORS = ['var(--color-done)', 'var(--color-not-done)'];
  const total = selectedSet.cardCount;
  const knewItCount = answers.filter((answer) => answer.rating === 'Knew it');
  const unsureCount = answers.filter((answer) => answer.rating === 'Unsure');
  const noIdeaCount = answers.filter((answer) => answer.rating === 'No idea');
  const knewItPercent = Math.round((knewItCount / total) * 100);
  const unsurePercent = Math.round((unsureCount / total) * 100);
  const noIdeaPercent = Math.round((noIdeaCount / total) * 100);
  const data = [
    { name: 'Knew it', value: knewItPercent },
    { name: 'Unsure', value: unsurePercent },
    { name: 'No Idea', value: noIdeaPercent },
  ];
  return (
    <div className='results-screen'>
      <div className='container'>
        <div className='study-screen'>
          <StudyHeader
            selectedSet={selectedSet}
            currentCardNumber={selectedSet.cardCount - 1}
            onBack={handleBack}
          />
        </div>
        <h2 className='intro-heading'>Session is complete</h2>
        <div className='diagram'>
          <PieChart width={260} height={260}>
            <Pie
              data={data}
              dataKey='value'
              innerRadius={55}
              outerRadius={105}
              stroke='none'
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          {/* <div>
            <div className='percents'>
              <div className='cirlce done'></div>
              <div>{checkedPercent || 0} %</div>
            </div>
            <div className='percents'>
              <div className='cirlce not-done'></div>
              <div>{nonCheckedPercent || 0} %</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
