import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BagelStyled } from './Bagel.styled';
import { useSelector } from 'react-redux';
import { selectSummaryAll } from 'redux/SummaryPage/selectors';
import { formatNumber } from 'helpers/helpers';

// npm install --save chart.js@^3.9.1 react-chartjs-2@^4.3.1
// npm install --save chart.js react-chartjs-2
// npm install chartjs-plugin-datalabels --save

ChartJS.register(ArcElement, Tooltip, Legend);

export const Bagel = () => {
  const { categoriesSummary, periodTotal } = useSelector(selectSummaryAll);
  if (!categoriesSummary.length || !periodTotal) {
    return;
  }
  const categoriesSum = categoriesSummary.length
    ? categoriesSummary.map(el => Math.abs(el.total))
    : [0];
  const data = {
    datasets: [
      {
        label: 'Summary',
        data: categoriesSum,
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    width: '288px',
    height: '288px',
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = '600 18px Poppins, sans-serif';
      ctx.fillStyle = '#FBFBFB';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `₴ ${formatNumber(Math.abs(periodTotal).toFixed(2))}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <BagelStyled style={{ width: '288px', height: '288px' }}>
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </BagelStyled>
  );
};
