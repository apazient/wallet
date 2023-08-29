import React from 'react';
import {
  StyledStatisticsTable,
  StyledStatisticsList,
  StyledStatisticsTotal,
} from './Table.styled';
import { useSelector } from 'react-redux';
import { selectCategory, selectSummaryAll } from 'redux/SummaryPage/selectors';
import { formatNumber } from 'helpers/helpers';

const colors = [
  'rgba(254, 208, 87, 1)',
  'rgba(255, 216, 208, 1)',
  'rgba(253, 148, 152, 1)',
  'rgba(197, 186, 255, 1)',
  'rgba(110, 120, 232, 1)',
  'rgba(74, 86, 226, 1)',
  'rgba(129, 225, 255, 1)',
  'rgba(36, 204, 167, 1)',
  'rgba(0, 173, 132, 1)',
  'rgba(197, 186, 255, 1)',
  'rgba(200, 191, 255, 1)',
];

export const Table = () => {
  const category = useSelector(selectCategory);
  const { expenseSummary, incomeSummary } = useSelector(selectSummaryAll);

  // if (!category.length) {
  //   return <h1>Ssory you do not have transactions on this time!</h1>;
  // }

  return (
    <StyledStatisticsTable>
      <div className="statistics-header">
        <p>Category</p>
        <p>Sum</p>
      </div>

      <StyledStatisticsList>
        {category.map(({ name, type, total }, index) => {
          return (
            <div key={index}>
              <li>
                <div
                  style={{ backgroundColor: colors[index] }}
                  className="category-color"
                ></div>
                <p className="category-item">{name}</p>
                <p className="category-sum">{Math.abs(total)}</p>
              </li>
              <div className="gradient"></div>
            </div>
          );
        })}
        <StyledStatisticsTotal>
          <li>
            <p className="total-item">Expenses:</p>
            <p className="total-sum-exp">
              {formatNumber(expenseSummary.toFixed(2))}
            </p>
          </li>

          <li>
            <p className="total-item">Income:</p>
            <p className="total-sum-inc">
              {formatNumber(incomeSummary.toFixed(2))}
            </p>
          </li>
        </StyledStatisticsTotal>
      </StyledStatisticsList>
    </StyledStatisticsTable>
  );
};
