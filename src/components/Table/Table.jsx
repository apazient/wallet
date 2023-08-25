import React from 'react';
import {
  StyledStatisticsTable,
  StyledStatisticsList,
  StyledStatisticsTotal,
} from './Table.styled';

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

export const Table = ({ items }) => {
  return (
    <StyledStatisticsTable>
      <div className="statistics-header">
        <p>Category</p>
        <p>Sum</p>
      </div>

      <StyledStatisticsList>
        {items.map(({ category, sum, id }) => {
          return (
            <div key={id}>
              <li>
                <div
                  style={{ backgroundColor: colors[id] }}
                  className="category-color"
                ></div>
                <p className="category-item">{category}</p>
                <p className="category-sum">{sum}</p>
              </li>
              <div className="gradient"></div>
            </div>
          );
        })}
        <StyledStatisticsTotal>
          <li>
            <p className="total-item">Expenses:</p>
            <p className="total-sum-exp">#</p>
          </li>

          <li>
            <p className="total-item">Income:</p>
            <p className="total-sum-inc">#</p>
          </li>
        </StyledStatisticsTotal>
      </StyledStatisticsList>
    </StyledStatisticsTable>
  );
};
